import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ypft5mbdm.css';
import '../../css/q/qrqpu7qbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ypft5mbdm"/><path class="qrqpu7qbd"/>`,
		"fallback": "si:phone-paused-fill",
	});
}

export default Component;
