import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tkuu9-b4z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tkuu9-b4z"/>`,
		"fallback": "fluent-emoji-high-contrast:snow-capped-mountain",
	});
}

export default Component;
