import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cqefncc1k.css';
import '../../css/b/ba1ag2d6k.css';
import '../../css/m/m7ily_p1p.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cqefncc1k"/><path class="ba1ag2d6k"/><path class="m7ily_p1p"/></g>`,
		"fallback": "cif:th",
	});
}

export default Component;
