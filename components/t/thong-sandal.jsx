import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/td8hh25oi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="td8hh25oi"/>`,
		"fallback": "fluent-emoji-high-contrast:thong-sandal",
	});
}

export default Component;
