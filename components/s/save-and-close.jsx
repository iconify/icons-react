import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irbpzsbnn.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="irbpzsbnn"/>`,
		"fallback": "fluent-mdl2:save-and-close",
	});
}

export default Component;
