import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mu4bsjbjq.css';
import '../../css/f/f3v_2do4j.css';
import '../../css/o/o459361vv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="mu4bsjbjq wm-shadow"/><path class="f3v_2do4j"/><path class="o459361vv"/></g>`,
		"fallback": "withicons-retro:list-todo",
	});
}

export default Component;
