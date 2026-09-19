import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/waa0gj62l.css';
import '../../css/b/bm_ueub-p.css';
import '../../css/b/bkp0xwruu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="waa0gj62l"/><path class="bm_ueub-p"/><path class="bkp0xwruu"/>`,
		"fallback": "bxl:union-pay",
	});
}

export default Component;
