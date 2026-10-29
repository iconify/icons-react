import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l9wvk6b3i.css';
import '../../css/a/a6rhncb-u.css';
import '../../css/i/ibl1xbbkn.css';
import '../../css/d/d8q7_jb6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l9wvk6b3i wm-k"/><path class="a6rhncb-u wm-k"/><path class="ibl1xbbkn wm-k"/><path class="d8q7_jb6a wm-shine"/></g>`,
		"fallback": "withicons-anime:reply",
	});
}

export default Component;
