import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/b/bov66nrpl.css';
import '../../css/h/hfi5e-rtf.css';
import '../../css/u/um2mdjbzw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="bov66nrpl wm-k"/><path class="hfi5e-rtf wm-a"/><path class="um2mdjbzw wm-deco"/></g>`,
		"fallback": "withicons-kawaii:list",
	});
}

export default Component;
