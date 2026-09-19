import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7o0qobko.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j7o0qobko"/>`,
		"fallback": "famicons:planet-sharp",
	});
}

export default Component;
