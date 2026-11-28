import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tfazt4b9n.css';
import '../../css/d/d2mg5e3yn.css';
import '../../css/p/p1ab4zb0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="tfazt4b9n"/><circle class="d2mg5e3yn"/><path class="p1ab4zb0b"/></g>`,
		"fallback": "iconaut:passport",
	});
}

export default Component;
