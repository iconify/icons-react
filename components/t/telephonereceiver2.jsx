import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgd8jygye.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgd8jygye"/>`,
		"fallback": "fxemoji:telephonereceiver2",
	});
}

export default Component;
