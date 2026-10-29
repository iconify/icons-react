import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b_d68_bhp.css';
import '../../css/a/ar0r6f66r.css';
import '../../css/b/bos0j4biy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="b_d68_bhp"/><path class="ar0r6f66r wm-a"/><path class="bos0j4biy"/></g>`,
		"fallback": "withicons:landmark",
	});
}

export default Component;
