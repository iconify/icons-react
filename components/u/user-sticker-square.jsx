import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/sv9oakb6w.css';
import '../../css/q/qqn2qgbhb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="sv9oakb6w"/><path class="qqn2qgbhb"/></g>`,
		"fallback": "streamline-sharp:user-sticker-square",
	});
}

export default Component;
