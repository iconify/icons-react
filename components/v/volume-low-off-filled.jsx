import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nr7d0j.css';
import '../../css/t/t5pxry.css';
import '../../css/o/oxx-om.css';
import '../../css/u/u1r-pm.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/s/so-from-34.css';
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
		"content": `<defs><mask id="SVG0iyYbdgG"><path class="nr7d0j t5pxry"/><path class="oxx-om t5pxry u1r-pm"/></mask></defs><path mask="url(#SVG0iyYbdgG)" class="botfzx"/><path class="gd_4-q t5pxry u1r-pm"/>`,
		"fallback": "line-md:volume-low-off-filled",
	});
}

export default Component;
