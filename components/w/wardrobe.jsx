import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cnfzppszj.css';
import '../../css/a/ay-1d3bni.css';
import '../../css/x/x3lg0tbto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cnfzppszj"/><path class="ay-1d3bni"/><path class="x3lg0tbto"/></g>`,
		"fallback": "andrsrxn:wardrobe",
	});
}

export default Component;
