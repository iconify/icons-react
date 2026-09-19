import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9xqzn69c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9xqzn69c"/>`,
		"fallback": "fluent-emoji-flat:top-arrow",
	});
}

export default Component;
