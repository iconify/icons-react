import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/k2l5sr19w.css';
import '../../css/s/s_l2ehbks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="k2l5sr19w"/><path class="s_l2ehbks"/></g>`,
		"fallback": "streamline-sharp:safe-vault",
	});
}

export default Component;
