import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/c35fhsbht.css';
import '../../css/m/mbjtpbb8u.css';
import '../../css/o/o8hc6nb6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="c35fhsbht"/><circle class="mbjtpbb8u"/><circle class="o8hc6nb6w"/></g>`,
		"fallback": "iconaut:shopping-cart",
	});
}

export default Component;
