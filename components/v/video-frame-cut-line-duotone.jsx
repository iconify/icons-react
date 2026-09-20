import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bc_yy0adh.css';
import '../../css/j/jgmiltbod.css';
import '../../css/m/m7w7hcbwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bc_yy0adh"/><path class="jgmiltbod"/><path class="m7w7hcbwu"/></g>`,
		"fallback": "solar:video-frame-cut-line-duotone",
	});
}

export default Component;
