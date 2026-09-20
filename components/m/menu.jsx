import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h7m2w7b4v.css';
import '../../css/l/l-muukb4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h7m2w7b4v"/><path class="l-muukb4g"/></g>`,
		"fallback": "tdesign:menu",
	});
}

export default Component;
