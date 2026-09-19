import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-06_rfwe.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-06_rfwe"/>`,
		"fallback": "fluent-emoji-high-contrast:palm-up-hand",
	});
}

export default Component;
