import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t0-cvjbua.css';
import '../../css/w/w-3x32u8q.css';
import '../../css/p/pr_1mzb5o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t0-cvjbua"/><path class="w-3x32u8q"/><circle class="pr_1mzb5o"/></g>`,
		"fallback": "icon-park-outline:kitchen-knife",
	});
}

export default Component;
