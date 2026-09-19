import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rufzhub3w.css';
import '../../css/g/gc28r3rcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rufzhub3w"/><path class="gc28r3rcs"/></g>`,
		"fallback": "iconamoon:star-off-bold",
	});
}

export default Component;
