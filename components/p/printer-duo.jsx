import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xy07pe4cu.css';
import '../../css/a/a7zornbiy.css';
import '../../css/t/t5e808btk.css';
import '../../css/l/lpqj20mmv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xy07pe4cu"/><path class="a7zornbiy"/><path class="t5e808btk"/><path class="lpqj20mmv"/></g>`,
		"fallback": "glyphs:printer-duo",
	});
}

export default Component;
