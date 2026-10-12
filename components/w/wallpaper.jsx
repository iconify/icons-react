import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/anoa0jxgg.css';
import '../../css/l/l9emq0bei.css';
import '../../css/f/f3dyhybkc.css';
import '../../css/b/btehxnnlo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="anoa0jxgg"/><rect class="l9emq0bei"/><path class="f3dyhybkc"/><path class="btehxnnlo"/></g>`,
		"fallback": "andrsrxn:wallpaper",
	});
}

export default Component;
