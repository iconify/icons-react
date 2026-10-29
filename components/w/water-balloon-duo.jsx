import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/i-4h2ab-f.css';
import '../../css/k/kfb2hf1uo.css';
import '../../css/p/pfunrccay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="i-4h2ab-f"/><path class="kfb2hf1uo wm-a"/><path class="pfunrccay"/></g>`,
		"fallback": "withicons:water-balloon-duo",
	});
}

export default Component;
