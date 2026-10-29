import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/w8rvwhbnt.css';
import '../../css/h/hl1kwacuc.css';
import '../../css/h/h7a9wibzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="w8rvwhbnt"/><path class="hl1kwacuc wm-a"/><path class="h7a9wibzd"/></g>`,
		"fallback": "withicons:love-lock-duo",
	});
}

export default Component;
