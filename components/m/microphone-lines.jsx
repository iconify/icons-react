import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9w3olbqn.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9w3olbqn"/>`,
		"fallback": "fa7-solid:microphone-lines",
	});
}

export default Component;
