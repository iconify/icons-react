import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-p09f.css';
import '../../css/t/t5pxry.css';
import '../../css/e/ermg4a.css';
import '../../css/u/u63-fz.css';
import '../../css/r/rk72je.css';
import '../../css/b/botfzx.css';
import '../../css/s/so-from-66.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGA7JZdcbT"><path class="i-p09f t5pxry"/><path class="ermg4a t5pxry u63-fz"/><path class="rk72je t5pxry u63-fz"/></mask></defs><path mask="url(#SVGA7JZdcbT)" class="botfzx"/>`,
		"fallback": "line-md:plus-square-filled",
	});
}

export default Component;
