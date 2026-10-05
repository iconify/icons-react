import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/n/n45loobvy.css';
import '../../css/w/w32-h-btm.css';
import '../../css/q/qh92rs84t.css';
import '../../css/d/doa64cnyr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="n45loobvy"/><path class="w32-h-btm"/><path class="qh92rs84t"/><path class="doa64cnyr"/></g>`,
		"fallback": "matita:pen-nib",
	});
}

export default Component;
