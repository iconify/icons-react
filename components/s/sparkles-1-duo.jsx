import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gf_bw-b3y.css';
import '../../css/t/tyfmkwpvm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gf_bw-b3y"/><path class="tyfmkwpvm"/></g>`,
		"fallback": "glyphs:sparkles-1-duo",
	});
}

export default Component;
