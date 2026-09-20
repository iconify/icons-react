import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njfju7uob.css';
import '../../css/m/mb039gb-o.css';
import '../../css/i/ibvcm-bop.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njfju7uob"/><path class="mb039gb-o"/><path class="ibvcm-bop"/>`,
		"fallback": "selfhst:the-verge-light",
	});
}

export default Component;
