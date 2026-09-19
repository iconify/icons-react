import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4yn5dlwj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4yn5dlwj"/>`,
		"fallback": "game-icons:trombone",
	});
}

export default Component;
