import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gr1jw-bfg.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/c99v-pbvj.css';
import '../../css/r/rum0klbyg.css';
import '../../css/p/p57qaeh-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gr1jw-bfg secondary"/><g class="dt0cm9dhy primary"><path class="c99v-pbvj"/><path class="rum0klbyg"/><path class="p57qaeh-b"/></g>`,
		"fallback": "iconaut:volume-duo",
	});
}

export default Component;
