import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jm8avyyaa.css';

const viewBox = {"width":528.787,"height":593.926};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jm8avyyaa"/>`,
		"fallback": "thesvg-color:residual-labs",
	});
}

export default Component;
