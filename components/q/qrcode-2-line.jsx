import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdhd6-b8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdhd6-b8p"/>`,
		"fallback": "mingcute:qrcode-2-line",
	});
}

export default Component;
