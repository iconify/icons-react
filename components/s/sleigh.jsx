import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/yr0k3sbts.css';
import '../../css/x/xni4fzb_z.css';
import '../../css/i/i4jft8vho.css';
import '../../css/r/rthofi-re.css';
import '../../css/w/wcy88z0dy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow yr0k3sbts"/><path class="xni4fzb_z"/><path class="i4jft8vho"/><path class="rthofi-re"/><path class="wcy88z0dy"/></g>`,
		"fallback": "withicons-retro:sleigh",
	});
}

export default Component;
