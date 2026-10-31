import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/z/zmx3w_bje.css';
import '../../css/j/j5bz35b4l.css';
import '../../css/o/oa0ee2qqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="wm-k zmx3w_bje"/><path class="j5bz35b4l wm-a"/><path class="oa0ee2qqb wm-deco"/></g>`,
		"fallback": "withicons-kawaii:sort",
	});
}

export default Component;
