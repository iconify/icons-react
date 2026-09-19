import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r4e8o6blf.css';
import '../../css/t/t5607jb8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r4e8o6blf"/><path class="t5607jb8d"/></g>`,
		"fallback": "iconamoon:player-previous-duotone",
	});
}

export default Component;
