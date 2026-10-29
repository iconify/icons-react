import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wr8y5ac_f.css';
import '../../css/z/zbzwm5bsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wr8y5ac_f"/><path class="wm-s zbzwm5bsf"/></g>`,
		"fallback": "withicons:volume-off-solid",
	});
}

export default Component;
