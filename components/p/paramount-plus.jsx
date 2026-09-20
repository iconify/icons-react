import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qn_k6cbbr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qn_k6cbbr"/>`,
		"fallback": "selfhst:paramount-plus",
	});
}

export default Component;
