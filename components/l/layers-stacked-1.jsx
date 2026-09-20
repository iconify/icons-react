import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oosqojbsx.css';
import '../../css/b/by2vf8dex.css';
import '../../css/f/f8j61zkcm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oosqojbsx"/><path class="by2vf8dex"/><path class="f8j61zkcm"/></g>`,
		"fallback": "streamline-freehand-color:layers-stacked-1",
	});
}

export default Component;
