import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s6bo82-gp.css';
import '../../css/k/k73avybot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s6bo82-gp"/><path class="k73avybot"/></g>`,
		"fallback": "streamline-freehand-color:music-note-1",
	});
}

export default Component;
