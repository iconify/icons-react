import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnjgqg3vf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnjgqg3vf"/>`,
		"fallback": "osmic:monument-14",
	});
}

export default Component;
