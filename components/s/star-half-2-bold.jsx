import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eevzplfhc.css';
import '../../css/b/bljinvb-u.css';
import '../../css/o/ott5z94di.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eevzplfhc"/><path class="bljinvb-u"/><path class="ott5z94di"/></g>`,
		"fallback": "glyphs:star-half-2-bold",
	});
}

export default Component;
