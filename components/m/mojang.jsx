import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i605gv53f.css';
import '../../css/e/e_l8g4x7j.css';

const viewBox = {"width":682,"height":682,"left":58.75,"top":58.75};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i605gv53f"/><path class="e_l8g4x7j"/>`,
		"fallback": "thesvg-color:mojang",
	});
}

export default Component;
