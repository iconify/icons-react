import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aupr5rbhp.css';
import '../../css/j/jkf3fdb5y.css';
import '../../css/o/obaa_5bei.css';
import '../../css/l/l4-53bcnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aupr5rbhp"/><path class="jkf3fdb5y"/><path class="obaa_5bei"/><path class="l4-53bcnd"/></g>`,
		"fallback": "streamline-freehand-color:video-meeting-team-monitor-man-1",
	});
}

export default Component;
