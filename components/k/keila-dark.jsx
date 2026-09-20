import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tabaybc0a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tabaybc0a"/>`,
		"fallback": "selfhst:keila-dark",
	});
}

export default Component;
