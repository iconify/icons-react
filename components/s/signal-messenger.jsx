import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fii5vacoh.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fii5vacoh"/>`,
		"fallback": "fa7-brands:signal-messenger",
	});
}

export default Component;
