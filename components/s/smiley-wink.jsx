import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tpzv8xb9k.css';
import '../../css/i/iqkwylbgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tpzv8xb9k"/><path class="iqkwylbgk"/></g>`,
		"fallback": "streamline-freehand-color:smiley-wink",
	});
}

export default Component;
