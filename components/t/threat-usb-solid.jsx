import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rr7-mrbod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rr7-mrbod"/>`,
		"fallback": "streamline-sharp:threat-usb-solid",
	});
}

export default Component;
