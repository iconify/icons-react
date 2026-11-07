import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frt5zby4n.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/e/e6j6dgbiz.css';
import '../../css/m/mgnw8cbbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="frt5zby4n"/><g class="xtpeb-edw"><path class="e6j6dgbiz"/><path class="mgnw8cbbw"/></g>`,
		"fallback": "solar:magnet-bold-duotone",
	});
}

export default Component;
