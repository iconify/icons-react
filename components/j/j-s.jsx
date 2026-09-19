import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5fy0sq6f.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5fy0sq6f"/>`,
		"fallback": "fluent-mdl2:j-s",
	});
}

export default Component;
