import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/j2jph0baw.css';
import '../../css/q/q04vkubxv.css';
import '../../css/p/p_aybwbyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="j2jph0baw"/><path class="q04vkubxv"/><path class="p_aybwbyu"/></g>`,
		"fallback": "hugeicons:mic-vocal",
	});
}

export default Component;
