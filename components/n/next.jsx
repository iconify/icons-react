import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2z8tnr9u.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2z8tnr9u"/>`,
		"fallback": "fluent-mdl2:next",
	});
}

export default Component;
