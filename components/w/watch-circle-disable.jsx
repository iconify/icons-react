import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kvqza4r3x.css';
import '../../css/i/ifvwxtb_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="kvqza4r3x"/><path class="ifvwxtb_m"/></g>`,
		"fallback": "streamline-sharp:watch-circle-disable",
	});
}

export default Component;
