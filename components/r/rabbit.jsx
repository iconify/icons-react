import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jtczhhbqf.css';
import '../../css/i/ix7o0oh5h.css';
import '../../css/j/j1qaecczu.css';
import '../../css/s/sc5sy_bkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="jtczhhbqf"/><path class="ix7o0oh5h"/><path class="j1qaecczu"/><path class="sc5sy_bkh"/></g>`,
		"fallback": "hugeicons:rabbit",
	});
}

export default Component;
