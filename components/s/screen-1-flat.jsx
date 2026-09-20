import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/i75vblnll.css';
import '../../css/w/wbrro5iuv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="i75vblnll"/><path class="wbrro5iuv"/></g>`,
		"fallback": "streamline-plump-color:screen-1-flat",
	});
}

export default Component;
