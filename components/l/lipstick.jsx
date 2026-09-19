import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6s8dqh1t.css';

const viewBox = {"width":897,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6s8dqh1t"/>`,
		"fallback": "whh:lipstick",
	});
}

export default Component;
