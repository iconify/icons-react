import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xe2begbta.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xe2begbta"/>`,
		"fallback": "fluent-emoji-high-contrast:shorts",
	});
}

export default Component;
