import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwfft0b8x.css';

const viewBox = {"width":1920,"height":1084};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwfft0b8x"/>`,
		"fallback": "thesvg-color:mocha-light",
	});
}

export default Component;
