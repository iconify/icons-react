import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/t/tovhbsnai.css';
import '../../css/u/u7qsm5bgl.css';
import '../../css/p/p2z1j9bmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="tovhbsnai"/><path class="u7qsm5bgl"/><path class="p2z1j9bmm"/></g>`,
		"fallback": "matita:sparkles",
	});
}

export default Component;
