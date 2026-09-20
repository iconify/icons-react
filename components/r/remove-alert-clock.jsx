import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/q44um0dfy.css';
import '../../css/h/h4cu_3_0z.css';
import '../../css/q/qq9g0dbkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="q44um0dfy"/><path class="h4cu_3_0z"/><path class="qq9g0dbkk"/></g>`,
		"fallback": "streamline-sharp:remove-alert-clock",
	});
}

export default Component;
