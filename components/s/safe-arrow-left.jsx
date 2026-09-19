import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/a3rfbyb6g.css';
import '../../css/q/qmnynrcvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="a3rfbyb6g"/><path class="qmnynrcvl"/></g>`,
		"fallback": "iconoir:safe-arrow-left",
	});
}

export default Component;
