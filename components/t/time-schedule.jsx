import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h9vgzhszr.css';
import '../../css/q/qi7u9v67a.css';
import '../../css/f/fi254ke4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="h9vgzhszr"/><path class="qi7u9v67a"/><path class="fi254ke4d"/></g>`,
		"fallback": "hugeicons:time-schedule",
	});
}

export default Component;
