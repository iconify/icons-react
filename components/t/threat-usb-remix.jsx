import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mind97vlq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mind97vlq"/>`,
		"fallback": "streamline-flex:threat-usb-remix",
	});
}

export default Component;
