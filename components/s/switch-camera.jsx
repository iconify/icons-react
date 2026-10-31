import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/lh2s7ebjn.css';
import '../../css/s/saewjvbbt.css';
import '../../css/w/w4e8ihwgt.css';
import '../../css/d/d_-dzx7jm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="lh2s7ebjn wm-shadow"/><path class="saewjvbbt wm-shadow"/><path class="w4e8ihwgt"/><path class="d_-dzx7jm"/></g>`,
		"fallback": "withicons-brutal:switch-camera",
	});
}

export default Component;
