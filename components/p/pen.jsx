import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fuh_7mbcg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fuh_7mbcg"/>`,
		"fallback": "fluent-emoji-high-contrast:pen",
	});
}

export default Component;
