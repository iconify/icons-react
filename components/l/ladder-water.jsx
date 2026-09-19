import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twmqo33gs.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twmqo33gs"/>`,
		"fallback": "fa7-solid:ladder-water",
	});
}

export default Component;
