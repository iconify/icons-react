import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/l/l75ci21bu.css';
import '../../css/z/zs3xofr3s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="l75ci21bu"/><path class="zs3xofr3s"/></g>`,
		"fallback": "streamline-plump:megaphone-refresh",
	});
}

export default Component;
