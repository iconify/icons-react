import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xac-pkbvl.css';
import '../../css/h/h8wb40b9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="xac-pkbvl"/><path class="h8wb40b9m wm-a"/></g>`,
		"fallback": "withicons:sandwich",
	});
}

export default Component;
