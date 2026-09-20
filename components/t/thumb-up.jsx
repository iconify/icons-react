import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u8hme9luj.css';
import '../../css/n/n2uk1fadl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u8hme9luj"/><path class="n2uk1fadl"/></g>`,
		"fallback": "tdesign:thumb-up",
	});
}

export default Component;
