import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b4a62x58a.css';
import '../../css/h/h1zbsh5sl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="b4a62x58a"/><path class="h1zbsh5sl"/></g>`,
		"fallback": "iconaut:sun-dim",
	});
}

export default Component;
