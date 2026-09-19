import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/i/ibwu39kik.css';
import '../../css/q/qqnj1mcie.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path clip-rule="evenodd" class="ibwu39kik"/><path class="qqnj1mcie"/></g>`,
		"fallback": "icon-park-outline:pills",
	});
}

export default Component;
