import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pfunrccay.css';
import '../../css/k/kfb2hf1uo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="pfunrccay"/><path class="kfb2hf1uo wm-a"/></g>`,
		"fallback": "withicons:water-balloon",
	});
}

export default Component;
