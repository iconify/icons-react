import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rogl70aes.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rogl70aes"/>`,
		"fallback": "fluent-emoji-high-contrast:sake",
	});
}

export default Component;
