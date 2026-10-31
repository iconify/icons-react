import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ajw0nrbny.css';
import '../../css/a/a2oa0jy6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ajw0nrbny"/><path class="a2oa0jy6d"/></g>`,
		"fallback": "coolicons:paper-plane-duotone-round",
	});
}

export default Component;
