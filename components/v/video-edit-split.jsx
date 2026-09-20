import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j05bqhb7c.css';
import '../../css/f/f-pr2tbsk.css';
import '../../css/m/marjsu4my.css';
import '../../css/i/ip_t4cckk.css';
import '../../css/n/n26yrdbyt.css';
import '../../css/y/yr86fbccv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j05bqhb7c"/><path class="f-pr2tbsk"/><path class="marjsu4my"/><path class="ip_t4cckk"/><path class="n26yrdbyt"/><path class="yr86fbccv"/></g>`,
		"fallback": "streamline-freehand-color:video-edit-split",
	});
}

export default Component;
