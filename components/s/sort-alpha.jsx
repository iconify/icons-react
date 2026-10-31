import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/n/nq17oqb-w.css';
import '../../css/j/j5bz35b4l.css';
import '../../css/n/n4kf-l4ki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="nq17oqb-w wm-k"/><path class="j5bz35b4l wm-a"/><path class="n4kf-l4ki wm-deco"/></g>`,
		"fallback": "withicons-kawaii:sort-alpha",
	});
}

export default Component;
