import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1euwac9a.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1euwac9a"/>`,
		"fallback": "fluent-mdl2:timer",
	});
}

export default Component;
