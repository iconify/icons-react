import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rh9ii3etk.css';
import '../../css/n/n8lt07bda.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rh9ii3etk"/><path class="n8lt07bda"/>`,
		"fallback": "selfhst:listseerr",
	});
}

export default Component;
