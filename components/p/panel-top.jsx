import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gnq7ddcmk.css';
import '../../css/r/ry-g1cmtf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gnq7ddcmk"/><path class="ry-g1cmtf"/></g>`,
		"fallback": "andrsrxn:panel-top",
	});
}

export default Component;
