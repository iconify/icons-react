import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csvco9ssf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csvco9ssf"/>`,
		"fallback": "fluent-emoji-high-contrast:leg",
	});
}

export default Component;
