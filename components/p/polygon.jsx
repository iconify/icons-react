import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2jwcgbdq.css';
import '../../css/c/cu9d7nszf.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2jwcgbdq"/><path class="cu9d7nszf"/>`,
		"fallback": "devicon:polygon",
	});
}

export default Component;
