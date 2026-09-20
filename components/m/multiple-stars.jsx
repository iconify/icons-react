import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d077qu89t.css';
import '../../css/o/ome0ssbuc.css';
import '../../css/n/n17r6tbwn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d077qu89t"/><path class="ome0ssbuc"/><path class="n17r6tbwn"/></g>`,
		"fallback": "streamline-flex-color:multiple-stars",
	});
}

export default Component;
