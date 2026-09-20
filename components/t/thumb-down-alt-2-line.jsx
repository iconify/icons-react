import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxfgdi9_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxfgdi9_q"/>`,
		"fallback": "si:thumb-down-alt-2-line",
	});
}

export default Component;
