import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uor91wbfu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uor91wbfu"/>`,
		"fallback": "fluent-emoji-high-contrast:shinto-shrine",
	});
}

export default Component;
