import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/v/vn2nlzbau.css';
import '../../css/m/mx1-ogvaj.css';
import '../../css/j/jx1a0rbwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="vn2nlzbau"/><path class="mx1-ogvaj"/><path class="jx1a0rbwm"/></g>`,
		"fallback": "matita:megaphone",
	});
}

export default Component;
