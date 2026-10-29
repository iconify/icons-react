import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j9p_os87x.css';
import '../../css/v/vjpnyegoq.css';
import '../../css/l/l9lv5_bcf.css';
import '../../css/m/mujhne3lv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="j9p_os87x wm-a"/><path class="vjpnyegoq wm-a"/><path class="l9lv5_bcf"/><path class="mujhne3lv wm-a"/></g>`,
		"fallback": "withicons:scan-eye-duo",
	});
}

export default Component;
