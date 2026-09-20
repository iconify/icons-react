import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a1ml_4k5c.css';
import '../../css/g/gpzjxjb3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="a1ml_4k5c"/><path class="gpzjxjb3u"/></g>`,
		"fallback": "streamline-freehand-color:security-shield-wall",
	});
}

export default Component;
