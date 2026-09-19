import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u49agrxwr.css';

const viewBox = {"width":1024,"height":1023};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u49agrxwr"/>`,
		"fallback": "whh:superscript",
	});
}

export default Component;
