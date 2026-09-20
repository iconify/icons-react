import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e8fxv6mbw.css';
import '../../css/y/y2j1wig8x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e8fxv6mbw"/><path class="y2j1wig8x"/></g>`,
		"fallback": "streamline-plump-color:paint-bucket-flat",
	});
}

export default Component;
