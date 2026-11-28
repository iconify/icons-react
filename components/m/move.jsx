import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/eywof3n0e.css';
import '../../css/x/xzuqt3brk.css';
import '../../css/j/jk12kbopf.css';
import '../../css/e/e7pe4749l.css';
import '../../css/l/lcpbulbhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="eywof3n0e"/><path class="xzuqt3brk"/><path class="jk12kbopf"/><path class="e7pe4749l"/><path class="lcpbulbhy"/></g>`,
		"fallback": "iconaut:move",
	});
}

export default Component;
