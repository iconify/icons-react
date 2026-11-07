import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/je0pbq8pu.css';
import '../../css/j/jay-3_dpw.css';
import '../../css/p/pf73k4bai.css';
import '../../css/g/gqb61cbma.css';
import '../../css/r/r9b6-mb5b.css';
import '../../css/w/wukh1tdzo.css';
import '../../css/v/vap5u3y1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="je0pbq8pu"/><path class="jay-3_dpw"/><path class="pf73k4bai"/><path class="gqb61cbma"/><path class="r9b6-mb5b"/><path class="wukh1tdzo"/><path class="vap5u3y1m"/></g>`,
		"fallback": "solar:signpost-2-line-duotone",
	});
}

export default Component;
