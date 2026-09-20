import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nr3710ble.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nr3710ble"/>`,
		"fallback": "streamline-freehand:water-fountain-drink",
	});
}

export default Component;
