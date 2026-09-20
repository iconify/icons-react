import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxvdnobkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxvdnobkk"/>`,
		"fallback": "mdi:numeric-10-circle-outline",
	});
}

export default Component;
