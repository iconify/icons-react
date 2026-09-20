import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pp-m33bou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pp-m33bou"/>`,
		"fallback": "streamline-sharp:threat-usb-remix",
	});
}

export default Component;
