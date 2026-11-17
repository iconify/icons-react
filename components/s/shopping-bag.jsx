import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/b/bg0ahiw7p.css';
import '../../css/y/yxkb4i3wl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="bg0ahiw7p"/><path class="yxkb4i3wl"/></g>`,
		"fallback": "matita:shopping-bag",
	});
}

export default Component;
