import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/q/q9_aebbll.css';
import '../../css/y/yjnd42hik.css';
import '../../css/n/ndgf8g0be.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="q9_aebbll"/><circle transform="rotate(-90 13 8.944)" class="yjnd42hik"/><path class="ndgf8g0be"/></g>`,
		"fallback": "icon-park-outline:split-turn-down-right",
	});
}

export default Component;
