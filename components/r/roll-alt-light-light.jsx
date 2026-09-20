import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/y/yb6t3nbpr.css';
import '../../css/e/ea4bkccoi.css';
import '../../css/k/k35zgbb0z.css';
import '../../css/a/a1rfq419s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="yb6t3nbpr"/><path class="ea4bkccoi"/><circle class="k35zgbb0z"/><path class="a1rfq419s"/></g>`,
		"fallback": "lets-icons:roll-alt-light-light",
	});
}

export default Component;
