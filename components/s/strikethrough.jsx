import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qgky98b5z.css';
import '../../css/r/r5-swrb2t.css';
import '../../css/n/nxfka_biw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="qgky98b5z wm-shadow"/><path class="r5-swrb2t wm-shadow"/><path class="nxfka_biw"/></g>`,
		"fallback": "withicons-brutal:strikethrough",
	});
}

export default Component;
