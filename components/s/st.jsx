import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mkwg-271v.css';
import '../../css/e/esw93etrt.css';
import '../../css/e/eofhxkbml.css';
import '../../css/i/io01yrznx.css';

const viewBox = {"width":301,"height":151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mkwg-271v"/><path class="esw93etrt"/><path class="eofhxkbml"/><path class="io01yrznx"/></g>`,
		"fallback": "cif:st",
	});
}

export default Component;
