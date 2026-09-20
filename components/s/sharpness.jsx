import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jy5wu1b-f.css';
import '../../css/x/xalck4baz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jy5wu1b-f"/><path class="xalck4baz"/></g>`,
		"fallback": "tdesign:sharpness",
	});
}

export default Component;
