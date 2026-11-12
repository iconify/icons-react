import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwc1l2bfp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwc1l2bfp"/>`,
		"fallback": "selfhst:plain-week-dark",
	});
}

export default Component;
