import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z95-v_bqm.css';
import '../../css/s/s37988bmp.css';

const viewBox = {"width":201,"height":193};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z95-v_bqm"/><path class="s37988bmp"/></g>`,
		"fallback": "thesvg-color:tron",
	});
}

export default Component;
