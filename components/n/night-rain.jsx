import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ibikkj_rr.css';
import '../../css/s/s9f4ylf6q.css';
import '../../css/d/dkdayieaa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ibikkj_rr"/><path class="s9f4ylf6q"/><path class="dkdayieaa"/></g>`,
		"fallback": "streamline-cyber-color:night-rain",
	});
}

export default Component;
