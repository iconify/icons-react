import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/s/srwjtlbzk.css';
import '../../css/i/i8m-_o_lx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="srwjtlbzk"/><path class="i8m-_o_lx"/></g>`,
		"fallback": "bitcoin-icons:moon-outline",
	});
}

export default Component;
