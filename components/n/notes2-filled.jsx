import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gozghab3f.css';
import '../../css/x/x97xm4bwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gozghab3f"/><path clip-rule="evenodd" class="x97xm4bwi"/></g>`,
		"fallback": "reicon:notes2-filled",
	});
}

export default Component;
