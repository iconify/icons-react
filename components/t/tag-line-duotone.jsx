import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/evuq8lbli.css';
import '../../css/j/j-efaqytf.css';
import '../../css/u/undwym_6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="evuq8lbli"/><circle transform="rotate(-45 8.607 8.879)" class="j-efaqytf"/><path class="undwym_6w"/></g>`,
		"fallback": "solar:tag-line-duotone",
	});
}

export default Component;
