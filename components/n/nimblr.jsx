import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8gg42jtn.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8gg42jtn"/>`,
		"fallback": "fa7-brands:nimblr",
	});
}

export default Component;
