import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/to7u0eb8d.css';
import '../../css/j/jpvit7b-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="to7u0eb8d"/><path class="jpvit7b-r"/></g>`,
		"fallback": "iconaut:iteration-ccw",
	});
}

export default Component;
