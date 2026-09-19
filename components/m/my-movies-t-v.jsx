import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dc-_9jbvi.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dc-_9jbvi"/>`,
		"fallback": "fluent-mdl2:my-movies-t-v",
	});
}

export default Component;
