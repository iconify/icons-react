import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/w/w0-4jlb6y.css';
import '../../css/t/tdrz0wbbv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="w0-4jlb6y"/><path class="tdrz0wbbv"/></g>`,
		"fallback": "icon-park:notepad",
	});
}

export default Component;
