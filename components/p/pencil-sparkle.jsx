import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/llkr30bsu.css';
import '../../css/l/lzamcu_6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="llkr30bsu"/><path class="lzamcu_6o"/></g>`,
		"fallback": "proicons:pencil-sparkle",
	});
}

export default Component;
