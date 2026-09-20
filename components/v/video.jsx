import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/al_-j1b3k.css';
import '../../css/q/qqnc45b_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="al_-j1b3k"/><path class="qqnc45b_z"/></g>`,
		"fallback": "proicons:video",
	});
}

export default Component;
