import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r6mgy9awu.css';

const viewBox = {"width":582,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r6mgy9awu"/>`,
		"fallback": "websymbol:lock",
	});
}

export default Component;
