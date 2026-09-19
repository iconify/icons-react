import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrui74b0l.css';
import '../../css/r/r-3q_9bym.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vrui74b0l"/><path class="r-3q_9bym"/>`,
		"fallback": "cil:toggle-off",
	});
}

export default Component;
