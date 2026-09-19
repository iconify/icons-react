import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ii-o27bgj.css';
import '../../css/c/cmw98uzxq.css';
import '../../css/l/lu_t6g4se.css';
import '../../css/i/i3-5u4bwm.css';
import '../../css/s/szpbs-bbb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ii-o27bgj"/><path class="cmw98uzxq"/><path class="lu_t6g4se"/><path class="i3-5u4bwm"/><path class="szpbs-bbb"/></g>`,
		"fallback": "fluent-emoji-flat:water-buffalo",
	});
}

export default Component;
