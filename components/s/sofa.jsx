import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bv45cu70d.css';
import '../../css/m/mgrc7zb-j.css';
import '../../css/x/x51wmgiym.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bv45cu70d"/><path clip-rule="evenodd" class="mgrc7zb-j"/><path class="x51wmgiym"/></g>`,
		"fallback": "glyphs-poly:sofa",
	});
}

export default Component;
