import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/id181bcnn.css';
import '../../css/c/ccbzd-njr.css';
import '../../css/m/mhb741-jf.css';
import '../../css/q/qq6j8u6ds.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="id181bcnn"/><path class="ccbzd-njr"/><path class="mhb741-jf"/><path class="qq6j8u6ds"/></g>`,
		"fallback": "glyphs:palm-tree-duo",
	});
}

export default Component;
