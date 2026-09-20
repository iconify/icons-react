import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0mjxcc0d.css';
import '../../css/i/icy1kprcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0mjxcc0d"/><path clip-rule="evenodd" class="icy1kprcx"/>`,
		"fallback": "token:tips",
	});
}

export default Component;
