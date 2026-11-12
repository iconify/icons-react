import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ki0l8_bai.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ki0l8_bai"/>`,
		"fallback": "selfhst:ticc-dash-dark",
	});
}

export default Component;
