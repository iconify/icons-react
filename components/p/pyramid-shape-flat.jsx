import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eag8sacjg.css';
import '../../css/q/qa13vo73y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eag8sacjg"/><path class="qa13vo73y"/></g>`,
		"fallback": "streamline-plump-color:pyramid-shape-flat",
	});
}

export default Component;
