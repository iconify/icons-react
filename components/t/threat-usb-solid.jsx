import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/stxl60b4c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="stxl60b4c"/>`,
		"fallback": "streamline-flex:threat-usb-solid",
	});
}

export default Component;
