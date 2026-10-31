import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/lsvvm8bbl.css';
import '../../css/a/asj_clbhe.css';
import '../../css/z/z9o4zrboc.css';
import '../../css/n/n6lr72bcy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="lsvvm8bbl wm-shadow"/><path class="asj_clbhe"/><path class="z9o4zrboc"/><path class="n6lr72bcy wm-s"/></g>`,
		"fallback": "withicons-retro:sunrise",
	});
}

export default Component;
