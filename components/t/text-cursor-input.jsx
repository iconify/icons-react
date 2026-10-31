import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/s-3crkunr.css';
import '../../css/g/gd1pb3blt.css';
import '../../css/q/qqxu292wq.css';
import '../../css/a/aou0hlbil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="s-3crkunr wm-shadow"/><path class="gd1pb3blt"/><path class="qqxu292wq"/><path class="aou0hlbil"/></g>`,
		"fallback": "withicons-retro:text-cursor-input",
	});
}

export default Component;
