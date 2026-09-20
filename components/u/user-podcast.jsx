import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/t/tdzmnstxh.css';
import '../../css/y/y0wdu3bmq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="tdzmnstxh"/><path clip-rule="evenodd" class="y0wdu3bmq"/></g>`,
		"fallback": "streamline-plump:user-podcast",
	});
}

export default Component;
