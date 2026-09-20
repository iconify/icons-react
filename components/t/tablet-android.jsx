import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qj2r8_bif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qj2r8_bif"/>`,
		"fallback": "mdi:tablet-android",
	});
}

export default Component;
