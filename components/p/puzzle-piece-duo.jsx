import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lo92fvblp.css';
import '../../css/o/on6hknbag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="lo92fvblp"/><path class="on6hknbag"/></g>`,
		"fallback": "withicons:puzzle-piece-duo",
	});
}

export default Component;
