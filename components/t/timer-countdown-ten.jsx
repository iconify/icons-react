import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/heqocdxoc.css';
import '../../css/x/xfms4jmbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="heqocdxoc"/><path class="xfms4jmbo"/></g>`,
		"fallback": "streamline-freehand-color:timer-countdown-ten",
	});
}

export default Component;
