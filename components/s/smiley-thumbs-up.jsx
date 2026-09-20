import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d9wtgrt9w.css';
import '../../css/v/vg6hheueu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d9wtgrt9w"/><path class="vg6hheueu"/></g>`,
		"fallback": "streamline-freehand-color:smiley-thumbs-up",
	});
}

export default Component;
