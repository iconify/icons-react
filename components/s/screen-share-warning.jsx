import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wf1yldbop.css';
import '../../css/d/d5ynaeb2l.css';
import '../../css/m/mx9ehddmk.css';
import '../../css/v/va8s-sbco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 22.27 19.12)" class="wf1yldbop"/><path class="d5ynaeb2l"/><path class="mx9ehddmk"/><rect transform="matrix(0 -1 -1 0 22.27 19.12)" class="va8s-sbco"/></g>`,
		"fallback": "andrsrxn:screen-share-warning",
	});
}

export default Component;
