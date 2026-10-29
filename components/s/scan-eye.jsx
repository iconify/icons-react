import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l9lv5_bcf.css';
import '../../css/m/mujhne3lv.css';
import '../../css/v/vjpnyegoq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="l9lv5_bcf"/><path class="mujhne3lv wm-a"/><path class="vjpnyegoq wm-a"/></g>`,
		"fallback": "withicons:scan-eye",
	});
}

export default Component;
