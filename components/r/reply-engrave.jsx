import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/forpazohq.css';
import '../../css/v/vt6-ivbtd.css';
import '../../css/c/cam9jzzbs.css';
import '../../css/m/m8-4o3bpy.css';
import '../../css/r/r1uvmmr9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="forpazohq wm-k"/><path class="vt6-ivbtd wm-a"/><path class="cam9jzzbs wm-shadow"/><path class="m8-4o3bpy wm-k"/><path class="r1uvmmr9d wm-a"/></g>`,
		"fallback": "withicons:reply-engrave",
	});
}

export default Component;
