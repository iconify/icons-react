import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wbw70x8hl.css';
import '../../css/h/hzteksbha.css';
import '../../css/p/p-fzojowo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wbw70x8hl"/><path class="hzteksbha"/><path class="p-fzojowo"/></g>`,
		"fallback": "andrsrxn:printer-3d",
	});
}

export default Component;
