import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uby_i-f3e.css';
import '../../css/c/chxgk_bzm.css';
import '../../css/n/nete0g-yd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uby_i-f3e"/><path class="chxgk_bzm"/><path class="nete0g-yd"/></g>`,
		"fallback": "streamline-cyber-color:network",
	});
}

export default Component;
