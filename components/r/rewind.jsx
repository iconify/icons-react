import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tuqd9ub8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tuqd9ub8d"/>`,
		"fallback": "keyline-icons:rewind",
	});
}

export default Component;
