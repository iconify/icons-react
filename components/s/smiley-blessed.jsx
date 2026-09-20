import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/malduobwn.css';
import '../../css/y/yp1d_0bvl.css';
import '../../css/z/zkpulid_q.css';
import '../../css/t/tw1voem7q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="malduobwn"/><path class="yp1d_0bvl"/><path class="zkpulid_q"/><path class="tw1voem7q"/></g>`,
		"fallback": "streamline-flex-color:smiley-blessed",
	});
}

export default Component;
