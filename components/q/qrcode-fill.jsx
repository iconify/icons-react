import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3dix2bjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3dix2bjx"/>`,
		"fallback": "mingcute:qrcode-fill",
	});
}

export default Component;
