import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dyhxp_bqm.css';
import '../../css/h/h_wul63na.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dyhxp_bqm"/><path class="h_wul63na"/></g>`,
		"fallback": "streamline-color:play-station-flat",
	});
}

export default Component;
