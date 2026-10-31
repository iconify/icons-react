import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/z/z6vt-ok-t.css';
import '../../css/v/vftkf4f-a.css';
import '../../css/w/wrs12o3tn.css';
import '../../css/b/b5o2ydj_o.css';
import '../../css/y/ywi9lmb7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow z6vt-ok-t"/><path class="vftkf4f-a wm-shadow"/><path class="wrs12o3tn"/><path class="b5o2ydj_o"/><path class="wm-s ywi9lmb7z"/></g>`,
		"fallback": "withicons-brutal:satellite",
	});
}

export default Component;
