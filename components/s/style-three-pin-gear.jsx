import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/is-ew9fxx.css';
import '../../css/j/jmo5yobsw.css';
import '../../css/h/h6i5dgw-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="is-ew9fxx"/><path class="jmo5yobsw"/><path class="h6i5dgw-l"/></g>`,
		"fallback": "streamline-ultimate:style-three-pin-gear",
	});
}

export default Component;
