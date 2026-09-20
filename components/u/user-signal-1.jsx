import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dzc8x6q6k.css';
import '../../css/w/w0a9k0m0u.css';
import '../../css/t/tghqjfbhf.css';
import '../../css/o/o4kgwxbri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dzc8x6q6k"/><path class="w0a9k0m0u"/><path class="tghqjfbhf"/><path class="o4kgwxbri"/></g>`,
		"fallback": "streamline-ultimate-color:user-signal-1",
	});
}

export default Component;
