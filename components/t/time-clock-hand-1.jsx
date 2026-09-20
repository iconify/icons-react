import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u1o5-hr-p.css';
import '../../css/g/g3py1w2kp.css';
import '../../css/x/xl9rlhbpl.css';
import '../../css/l/l5ymjnbtt.css';
import '../../css/r/rci-ytcnk.css';
import '../../css/n/ns62xgb3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u1o5-hr-p"/><path class="g3py1w2kp"/><path class="xl9rlhbpl"/><path class="l5ymjnbtt"/><path class="rci-ytcnk"/><path class="ns62xgb3b"/></g>`,
		"fallback": "streamline-ultimate-color:time-clock-hand-1",
	});
}

export default Component;
