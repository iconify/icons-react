import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v37go_bat.css';
import '../../css/x/x1upmdj7u.css';
import '../../css/e/e3gyqtblp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v37go_bat"/><path class="x1upmdj7u"/><path class="e3gyqtblp"/></g>`,
		"fallback": "streamline-freehand-color:photo-frame-hang",
	});
}

export default Component;
