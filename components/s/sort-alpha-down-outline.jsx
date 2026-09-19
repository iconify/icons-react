import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d4kcgfa-d.css';
import '../../css/c/c-6_08brp.css';
import '../../css/h/hbnz1c8ej.css';
import '../../css/m/mzhrmtosr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="d4kcgfa-d"/><path class="c-6_08brp"/><path clip-rule="evenodd" class="hbnz1c8ej"/><path class="mzhrmtosr"/></g>`,
		"fallback": "glyphs:sort-alpha-down-outline",
	});
}

export default Component;
