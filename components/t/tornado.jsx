import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwy1bxbsx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iwy1bxbsx"/>`,
		"fallback": "fluent-emoji-high-contrast:tornado",
	});
}

export default Component;
