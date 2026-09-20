import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sx10v2n2b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sx10v2n2b"/>`,
		"fallback": "selfhst:tianji-dark",
	});
}

export default Component;
