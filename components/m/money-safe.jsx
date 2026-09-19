import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/x5t60kbnz.css';
import '../../css/i/ifwka7jyb.css';
import '../../css/t/tti1bth-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="x5t60kbnz"/><path class="ifwka7jyb"/><path class="tti1bth-i"/></g>`,
		"fallback": "hugeicons:money-safe",
	});
}

export default Component;
