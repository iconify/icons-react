import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4df0dbtr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4df0dbtr"/>`,
		"fallback": "fluent-emoji-high-contrast:large-orange-diamond",
	});
}

export default Component;
