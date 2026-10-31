import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/b/b42uobcxl.css';
import '../../css/z/zr6c0qbrk.css';
import '../../css/v/v_qpa3bus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="b42uobcxl wm-k"/><path class="wm-a zr6c0qbrk"/><path class="v_qpa3bus wm-deco"/></g>`,
		"fallback": "withicons-kawaii:list-tree",
	});
}

export default Component;
