import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ofa0zriwx.css';
import '../../css/c/c866szb7c.css';
import '../../css/x/x-cdxwb4q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ofa0zriwx"/><path clip-rule="evenodd" class="c866szb7c"/><path clip-rule="evenodd" class="x-cdxwb4q"/></g>`,
		"fallback": "streamline-color:search-visual-flat",
	});
}

export default Component;
