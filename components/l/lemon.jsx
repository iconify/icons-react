import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jc9ruyn8g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jc9ruyn8g"/>`,
		"fallback": "fa-regular:lemon",
	});
}

export default Component;
