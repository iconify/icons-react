import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m996b6byz.css';
import '../../css/k/kcpp1x41e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="m996b6byz"/><path class="kcpp1x41e"/></g>`,
		"fallback": "hugeicons:toggle-right",
	});
}

export default Component;
