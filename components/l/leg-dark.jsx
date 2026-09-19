import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rk2z1cc-v.css';
import '../../css/v/v56-r9bxm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rk2z1cc-v"/><path class="v56-r9bxm"/></g>`,
		"fallback": "fluent-emoji-flat:leg-dark",
	});
}

export default Component;
