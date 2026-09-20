import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/xeb-fib6w.css';
import '../../css/c/ciu-kx8bj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="xeb-fib6w"/><path class="ciu-kx8bj"/></g>`,
		"fallback": "keyline-icons:podium-3-sharp",
	});
}

export default Component;
