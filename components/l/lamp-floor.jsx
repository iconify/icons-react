import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zbtgqfi7q.css';
import '../../css/e/eknai5olh.css';
import '../../css/i/i8imsdbhb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="zbtgqfi7q"/><path class="eknai5olh"/><path class="i8imsdbhb"/></g>`,
		"fallback": "iconaut:lamp-floor",
	});
}

export default Component;
