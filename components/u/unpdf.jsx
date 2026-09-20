import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vug7t_0eo.css';
import '../../css/c/c9kkdsb8o.css';
import '../../css/f/fdwf6qbev.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vug7t_0eo"/><path class="c9kkdsb8o"/><path class="fdwf6qbev"/></g>`,
		"fallback": "unjs:unpdf",
	});
}

export default Component;
