import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k9lm54fjr.css';
import '../../css/t/txj5lrrof.css';
import '../../css/c/c_w8saclo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="k9lm54fjr"/><path class="txj5lrrof wm-a"/><path class="c_w8saclo"/></g>`,
		"fallback": "withicons:layout-template-duo",
	});
}

export default Component;
