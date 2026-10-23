import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hqx1wrboq.css';
import '../../css/w/wqysgdt-t.css';
import '../../css/b/b7ulpdbbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hqx1wrboq"/><path class="wqysgdt-t"/><path class="b7ulpdbbk"/></g>`,
		"fallback": "andrsrxn:short",
	});
}

export default Component;
