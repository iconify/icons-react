import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qrfxe7bdo.css';
import '../../css/h/h8wb40b9m.css';
import '../../css/x/xac-pkbvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="qrfxe7bdo"/><path class="h8wb40b9m wm-a"/><path class="xac-pkbvl"/></g>`,
		"fallback": "withicons:sandwich-duo",
	});
}

export default Component;
