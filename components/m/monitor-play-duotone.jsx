import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f-g21g2bu.css';
import '../../css/r/ra7ndubnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="f-g21g2bu"/><path class="ra7ndubnh"/></g>`,
		"fallback": "si:monitor-play-duotone",
	});
}

export default Component;
