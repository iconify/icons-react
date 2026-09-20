import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/g_bgizbmz.css';
import '../../css/d/d53i9pblw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="g_bgizbmz"/><path class="d53i9pblw"/></g>`,
		"fallback": "streamline-sharp:water-drop-1",
	});
}

export default Component;
