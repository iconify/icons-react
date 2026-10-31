import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l8mhrrbdg.css';
import '../../css/i/im48wz0-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="l8mhrrbdg"/><path class="im48wz0-s"/></g>`,
		"fallback": "coolicons:text-sparkle-duocolor-round",
	});
}

export default Component;
