import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qtwm5wf_a.css';
import '../../css/a/aw-rszlkj.css';
import '../../css/j/j4r_gubgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qtwm5wf_a"/><path class="aw-rszlkj"/><path class="j4r_gubgn"/></g>`,
		"fallback": "streamline-freehand-color:video-player-smartphone-horizontal",
	});
}

export default Component;
