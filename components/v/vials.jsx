import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/p8zug3oqg.css';
import '../../css/p/p-hb2dbpu.css';
import '../../css/z/zl93bsbqp.css';
import '../../css/k/krynnrlat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="p8zug3oqg"/><path class="p-hb2dbpu"/><path class="zl93bsbqp"/><path class="krynnrlat"/></g>`,
		"fallback": "iconaut:vials",
	});
}

export default Component;
