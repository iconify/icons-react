import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/c/c6b32lbva.css';
import '../../css/h/hkw5s0b0y.css';
import '../../css/t/tb7h92xrz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="c6b32lbva"/><path class="hkw5s0b0y"/><path class="tb7h92xrz"/></g>`,
		"fallback": "icon-park-outline:school",
	});
}

export default Component;
