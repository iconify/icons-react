import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rv1-spb_x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rv1-spb_x"/>`,
		"fallback": "game-icons:spiked-shoulder-armor",
	});
}

export default Component;
