import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bybmr1b4l.css';
import '../../css/z/zweu-dnef.css';
import '../../css/j/jt7vshb3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="bybmr1b4l"/><path class="zweu-dnef"/><path class="jt7vshb3p"/></g>`,
		"fallback": "hugeicons:siren",
	});
}

export default Component;
