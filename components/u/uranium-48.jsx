import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z5-sh3vvp.css';
import '../../css/j/joigvlfvo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z5-sh3vvp"/><path class="joigvlfvo"/>`,
		"fallback": "energy-icons:uranium-48",
	});
}

export default Component;
