import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m4-nrsbmo.css';
import '../../css/p/ppyb-dl-w.css';
import '../../css/n/nxu2qqbbu.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m4-nrsbmo"/><path class="ppyb-dl-w"/><path class="nxu2qqbbu"/></g>`,
		"fallback": "streamline-stickies-color:shop-store",
	});
}

export default Component;
