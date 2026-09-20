import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yvx9hmfjt.css';
import '../../css/n/n-u1clb1s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yvx9hmfjt"/><path class="n-u1clb1s"/></g>`,
		"fallback": "streamline-plump-color:shuffle-flat",
	});
}

export default Component;
