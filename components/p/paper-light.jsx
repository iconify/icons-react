import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/n/nx6i4ug7z.css';
import '../../css/g/g-lx9is4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="nx6i4ug7z"/><path class="g-lx9is4q"/></g>`,
		"fallback": "lets-icons:paper-light",
	});
}

export default Component;
