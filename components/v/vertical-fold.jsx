import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f44evnslo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f44evnslo"/>`,
		"fallback": "carbon:vertical-fold",
	});
}

export default Component;
