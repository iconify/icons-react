import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eckid59_t.css';
import '../../css/t/tc-l81vik.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eckid59_t"/><path class="tc-l81vik"/>`,
		"fallback": "streamline-pixel:interface-essential-signin-login",
	});
}

export default Component;
