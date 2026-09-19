import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/das0gdcyg.css';

const viewBox = {"width":464,"height":464};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="das0gdcyg"/>`,
		"fallback": "ps:stumbleupon",
	});
}

export default Component;
