import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i503dibig.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i503dibig"/>`,
		"fallback": "fluent-mdl2:web-components",
	});
}

export default Component;
