import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1aembgqz.css';
import '../../css/t/thhwdjbwo.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c1aembgqz"/><path class="thhwdjbwo"/>`,
		"fallback": "devicon:qwen",
	});
}

export default Component;
