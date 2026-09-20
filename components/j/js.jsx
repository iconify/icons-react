import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/da7zqbe4j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="da7zqbe4j"/>`,
		"fallback": "la:js",
	});
}

export default Component;
