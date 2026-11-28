import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zaz45eb5r.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kpnaedvsj.css';
import '../../css/y/ypzhaybhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary zaz45eb5r"/><g class="dt0cm9dhy primary"><path class="kpnaedvsj"/><path class="ypzhaybhn"/></g>`,
		"fallback": "iconaut:water-glass-duo",
	});
}

export default Component;
