import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b4-bylbpd.css';
import '../../css/j/j6arspbav.css';
import '../../css/j/jw30ykbot.css';
import '../../css/a/apylg7b5j.css';
import '../../css/b/bm127ccye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="b4-bylbpd wm-shadow"/><path class="j6arspbav"/><path class="jw30ykbot"/><path class="apylg7b5j"/><path class="bm127ccye"/></g>`,
		"fallback": "withicons-retro:ticket",
	});
}

export default Component;
