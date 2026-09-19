import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4o6kkbwn.css';

const viewBox = {"width":1024,"height":897};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4o6kkbwn"/>`,
		"fallback": "whh:minigrin",
	});
}

export default Component;
