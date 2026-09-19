import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rft8ifkfx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rft8ifkfx"/>`,
		"fallback": "fluent-emoji-high-contrast:spoon",
	});
}

export default Component;
