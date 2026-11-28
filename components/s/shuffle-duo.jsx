import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/cc676obom.css';
import '../../css/c/c05-kbk7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="cc676obom"/><path class="c05-kbk7b"/></g>`,
		"fallback": "iconaut:shuffle-duo",
	});
}

export default Component;
