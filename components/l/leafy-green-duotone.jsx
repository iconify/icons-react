import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wep1khr3x.css';
import '../../css/t/t__lwvbuc.css';
import '../../css/q/qt2xe75xs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wep1khr3x"/><path class="t__lwvbuc"/><path class="qt2xe75xs"/></g>`,
		"fallback": "lucide-extended:leafy-green-duotone",
	});
}

export default Component;
