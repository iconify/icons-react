import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v28j06bvi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v28j06bvi"/>`,
		"fallback": "fluent-emoji-high-contrast:nut-and-bolt",
	});
}

export default Component;
