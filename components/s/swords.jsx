import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/s8tbnvbfr.css';
import '../../css/y/yw65l1n9b.css';
import '../../css/i/ik6bwxiui.css';
import '../../css/t/tg06e8gex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="s8tbnvbfr wm-shadow"/><path class="yw65l1n9b"/><path class="ik6bwxiui"/><path class="tg06e8gex"/></g>`,
		"fallback": "withicons-retro:swords",
	});
}

export default Component;
