import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/faxp91bhv.css';
import '../../css/d/dqth9tb4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="faxp91bhv"/><path class="dqth9tb4e"/></g>`,
		"fallback": "streamline-sharp:laptop-project-screen",
	});
}

export default Component;
