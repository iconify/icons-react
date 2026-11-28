import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/g_h41ybvr.css';
import '../../css/h/huz-2q25e.css';
import '../../css/t/tymgqqbzp.css';
import '../../css/l/liicipyjo.css';
import '../../css/g/g58ztrpiw.css';
import '../../css/y/y4kv_himn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="g_h41ybvr"/><path class="huz-2q25e"/><path class="tymgqqbzp"/><path class="liicipyjo"/><path class="g58ztrpiw"/><path class="y4kv_himn"/></g>`,
		"fallback": "iconaut:subscription",
	});
}

export default Component;
