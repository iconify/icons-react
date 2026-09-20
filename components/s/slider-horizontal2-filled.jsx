import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ke5mo2bsg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ke5mo2bsg"/>`,
		"fallback": "reicon:slider-horizontal2-filled",
	});
}

export default Component;
