import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/x/xy71q67bi.css';
import '../../css/f/f3s2fab-i.css';
import '../../css/w/wa2w2_b7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="xy71q67bi"/><path class="f3s2fab-i"/><path class="wa2w2_b7p"/></g>`,
		"fallback": "matita:t-square",
	});
}

export default Component;
