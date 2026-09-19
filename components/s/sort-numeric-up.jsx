import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nwr_dwg1v.css';
import '../../css/i/ij4jxkbjm.css';
import '../../css/e/eui6ubbnm.css';
import '../../css/j/jg_dtjh4j.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nwr_dwg1v"/><path class="ij4jxkbjm"/><path class="eui6ubbnm"/><path class="jg_dtjh4j"/></g>`,
		"fallback": "glyphs-poly:sort-numeric-up",
	});
}

export default Component;
