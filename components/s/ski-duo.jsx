import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vuuxmnbun.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/c9l6zdbzc.css';
import '../../css/b/bmmzlnboq.css';
import '../../css/i/ikwrflpbk.css';
import '../../css/b/bfmc13bjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary vuuxmnbun"/><g class="dt0cm9dhy primary"><path class="c9l6zdbzc"/><path class="bmmzlnboq"/><path class="ikwrflpbk"/><path class="bfmc13bjr"/></g>`,
		"fallback": "iconaut:ski-duo",
	});
}

export default Component;
