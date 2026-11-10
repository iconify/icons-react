import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gjnxcgb_j.css';
import '../../css/a/arf83eb9f.css';
import '../../css/y/y6-th164g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="gjnxcgb_j"/><path class="arf83eb9f"/><path class="y6-th164g"/></g>`,
		"fallback": "andrsrxn:notes-quotes",
	});
}

export default Component;
