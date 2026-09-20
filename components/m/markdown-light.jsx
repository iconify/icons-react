import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/w/winbjxb5o.css';
import '../../css/v/vdvb-qbjx.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><path class="winbjxb5o"/><path class="vdvb-qbjx"/></g>`,
		"fallback": "skill-icons:markdown-light",
	});
}

export default Component;
