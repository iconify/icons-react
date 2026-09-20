import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cp5vo7b9z.css';
import '../../css/j/j-j2v3y_c.css';
import '../../css/h/h3wr_jb8n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cp5vo7b9z"/><path class="j-j2v3y_c"/><path class="h3wr_jb8n"/></g>`,
		"fallback": "streamline-color:warning-octagon",
	});
}

export default Component;
