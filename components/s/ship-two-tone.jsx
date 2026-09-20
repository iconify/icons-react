import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y5rhuefdb.css';
import '../../css/i/in_inbcvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="y5rhuefdb"/><path class="in_inbcvv"/></g>`,
		"fallback": "keyline-icons:ship-two-tone",
	});
}

export default Component;
