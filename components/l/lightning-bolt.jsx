import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/ve7m83zcc.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ve7m83zcc"/>`,
		"fallback": "fluent-mdl2:lightning-bolt",
	});
}

export default Component;
