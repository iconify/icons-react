import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lw_27jbqp.css';
import '../../css/g/gtx1_vbgz.css';
import '../../css/e/eos4htbgn.css';
import '../../css/v/viumkfbex.css';
import '../../css/f/fuc7_i9kp.css';
import '../../css/a/ajid93ewj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lw_27jbqp"/><path class="gtx1_vbgz"/><path class="eos4htbgn"/><path class="viumkfbex"/><path class="fuc7_i9kp"/><path class="ajid93ewj"/></g>`,
		"fallback": "fluent-emoji-flat:stopwatch",
	});
}

export default Component;
