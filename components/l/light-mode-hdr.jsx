import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b2leoccxn.css';
import '../../css/g/gi-96bc6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b2leoccxn"/><path class="gi-96bc6f"/></g>`,
		"fallback": "streamline-freehand-color:light-mode-hdr",
	});
}

export default Component;
