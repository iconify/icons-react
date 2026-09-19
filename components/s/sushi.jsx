import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjqjp3boe.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjqjp3boe"/>`,
		"fallback": "fluent-emoji-high-contrast:sushi",
	});
}

export default Component;
