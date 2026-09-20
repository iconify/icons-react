import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/znhq0_bcd.css';
import '../../css/u/u5prq5l9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="znhq0_bcd"/><path class="u5prq5l9x"/></g>`,
		"fallback": "streamline-sharp:trophy",
	});
}

export default Component;
