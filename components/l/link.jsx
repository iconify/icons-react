import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nl3x9zbkz.css';

const viewBox = {"width":448,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nl3x9zbkz"/>`,
		"fallback": "ps:link",
	});
}

export default Component;
