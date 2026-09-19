import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fp00jbqxq.css';
import '../../css/c/cxsu3gbwu.css';
import '../../css/d/dpcidl-rd.css';
import '../../css/p/pm_m9qbfd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="fp00jbqxq"/><path class="cxsu3gbwu"/><path clip-rule="evenodd" class="dpcidl-rd"/><path class="pm_m9qbfd"/></g>`,
		"fallback": "glyphs-poly:octagon",
	});
}

export default Component;
