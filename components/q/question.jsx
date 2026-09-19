import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jig3vgbfb.css';

const viewBox = {"width":412,"height":731};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jig3vgbfb"/>`,
		"fallback": "ls:question",
	});
}

export default Component;
