import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/civkr7bau.css';
import '../../css/h/hs38sub6q.css';
import '../../css/l/l9lv5_bcf.css';
import '../../css/l/l0v-b4kbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="civkr7bau"/><path class="hs38sub6q wm-a"/><path class="l9lv5_bcf"/><path class="l0v-b4kbr wm-a"/></g>`,
		"fallback": "withicons:scan-text-duo",
	});
}

export default Component;
