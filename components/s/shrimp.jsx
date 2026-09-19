import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g362dibni.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g362dibni"/>`,
		"fallback": "fluent-emoji-high-contrast:shrimp",
	});
}

export default Component;
