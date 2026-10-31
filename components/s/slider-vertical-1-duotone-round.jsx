import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oid6zrcpk.css';
import '../../css/y/ycowsc4im.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oid6zrcpk"/><path class="ycowsc4im"/></g>`,
		"fallback": "coolicons:slider-vertical-1-duotone-round",
	});
}

export default Component;
