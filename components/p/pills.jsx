import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vyobbkbhc.css';
import '../../css/f/fqclo1b7h.css';
import '../../css/w/wezarpbyl.css';
import '../../css/l/lu5kmdbub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="vyobbkbhc"/><path class="fqclo1b7h"/><path class="wezarpbyl"/><path class="lu5kmdbub"/></g>`,
		"fallback": "iconaut:pills",
	});
}

export default Component;
