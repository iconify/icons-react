import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i_rn3obdo.css';
import '../../css/m/m4i19tyoh.css';
import '../../css/x/x94spybsx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i_rn3obdo"/><path class="m4i19tyoh"/><path class="x94spybsx"/></g>`,
		"fallback": "glyphs-poly:screwdriver",
	});
}

export default Component;
