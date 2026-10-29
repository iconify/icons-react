import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/t-5wpjwof.css';
import '../../css/o/o8mkkgbix.css';
import '../../css/c/c4_v7i59t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="t-5wpjwof"/><path class="o8mkkgbix wm-a"/><path class="c4_v7i59t"/></g>`,
		"fallback": "withicons:sticky-note-duo",
	});
}

export default Component;
