import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/s/s2pky5n8k.css';
import '../../css/c/ccwslmg7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="s2pky5n8k"/><path class="ccwslmg7r"/></g>`,
		"fallback": "keyline-icons:terminal-cursor-sharp-fill",
	});
}

export default Component;
