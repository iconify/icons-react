import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/v/vk3-pe03e.css';
import '../../css/d/dmj_t_b1h.css';
import '../../css/i/itu9wbc8d.css';
import '../../css/a/ar0r6f66r.css';
import '../../css/v/v3bzhxbbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="vk3-pe03e"/><path class="dmj_t_b1h wm-shine"/><path class="itu9wbc8d wm-k"/><path class="ar0r6f66r wm-a"/><path class="v3bzhxbbh wm-deco"/></g>`,
		"fallback": "withicons-kawaii:landmark",
	});
}

export default Component;
