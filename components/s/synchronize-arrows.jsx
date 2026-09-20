import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eht2tzi6z.css';
import '../../css/y/y43ojfrqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eht2tzi6z"/><path class="y43ojfrqz"/></g>`,
		"fallback": "streamline-freehand-color:synchronize-arrows",
	});
}

export default Component;
