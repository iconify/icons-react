import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/d/d_fbp5lsf.css';
import '../../css/m/mjxbpqbzk.css';
import '../../css/w/wyq16_b_v.css';
import '../../css/r/rk1exhmto.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="d_fbp5lsf"/><path class="mjxbpqbzk"/><path class="wyq16_b_v"/><path class="rk1exhmto"/></g>`,
		"fallback": "streamline-plump-color:visual-blind",
	});
}

export default Component;
