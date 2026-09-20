import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h59qhmbic.css';
import '../../css/i/ig8qghvay.css';
import '../../css/x/xwm29_bdq.css';
import '../../css/f/fz46-cb9e.css';
import '../../css/a/ak_5w2ghk.css';
import '../../css/o/orfa7uvbw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h59qhmbic"/><path class="ig8qghvay"/><path class="xwm29_bdq"/><path class="fz46-cb9e"/><path class="ak_5w2ghk"/><path class="orfa7uvbw"/></g>`,
		"fallback": "streamline-color:user-protection-2",
	});
}

export default Component;
