import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/l/lmwx2op8z.css';
import '../../css/c/cjn6axrjc.css';
import '../../css/y/yc8m6585x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="lmwx2op8z"/><path class="cjn6axrjc"/><path class="wm-deco yc8m6585x"/></g>`,
		"fallback": "withicons-kawaii:music-2",
	});
}

export default Component;
