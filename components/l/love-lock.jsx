import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pdoe7fa1e.css';
import '../../css/h/h7a9wibzd.css';
import '../../css/c/cu7wb8t0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="pdoe7fa1e wm-a"/><path class="h7a9wibzd"/><path class="cu7wb8t0f wm-a"/></g>`,
		"fallback": "withicons:love-lock",
	});
}

export default Component;
