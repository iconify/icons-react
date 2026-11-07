import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/iq0egqbir.css';
import '../../css/t/tssdqrzjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="iq0egqbir"/><path class="tssdqrzjz"/></g>`,
		"fallback": "solar:move-linear",
	});
}

export default Component;
