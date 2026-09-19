import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ym48_tb-c.css';
import '../../css/l/lh4p42bvx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ym48_tb-c"/><path class="lh4p42bvx"/></g>`,
		"fallback": "glyphs-poly:sun-1",
	});
}

export default Component;
