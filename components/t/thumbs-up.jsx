import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/cvwjuk0bx.css';
import '../../css/m/mk7_fccwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="cvwjuk0bx"/><path class="mk7_fccwz wm-a"/></g>`,
		"fallback": "withicons:thumbs-up",
	});
}

export default Component;
