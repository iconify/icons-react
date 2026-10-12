import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qr6_6tbrr.css';
import '../../css/i/is3hswbmz.css';
import '../../css/w/w4t23ybzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qr6_6tbrr"/><path class="is3hswbmz"/><path class="w4t23ybzh"/></g>`,
		"fallback": "lucide-extended:smartphone-nfc-duotone",
	});
}

export default Component;
