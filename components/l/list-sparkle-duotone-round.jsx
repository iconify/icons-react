import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a65_xtbrl.css';
import '../../css/y/yfu4o4biy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a65_xtbrl"/><path class="yfu4o4biy"/></g>`,
		"fallback": "coolicons:list-sparkle-duotone-round",
	});
}

export default Component;
