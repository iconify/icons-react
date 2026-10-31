import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/bq46uowvk.css';
import '../../css/f/f5zdz58kw.css';
import '../../css/y/yx6qcnh6h.css';
import '../../css/w/wq8zqtbdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="bq46uowvk wm-shadow"/><path class="f5zdz58kw wm-shadow"/><path class="yx6qcnh6h"/><path class="wq8zqtbdl"/></g>`,
		"fallback": "withicons-brutal:text-cursor",
	});
}

export default Component;
