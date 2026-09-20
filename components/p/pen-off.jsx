import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ij1dzcb8g.css';
import '../../css/m/m90qh6b7j.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ij1dzcb8g"/><path clip-rule="evenodd" class="m90qh6b7j"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:pen-off",
	});
}

export default Component;
