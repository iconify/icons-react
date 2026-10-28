import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oslqv1qoq.css';
import '../../css/i/i2ugv7h_j.css';
import '../../css/u/un0mksblv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="oslqv1qoq"><rect class="i2ugv7h_j"/><rect class="un0mksblv"/></g>`,
		"fallback": "codex:pause",
	});
}

export default Component;
