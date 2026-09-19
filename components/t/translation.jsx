import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slplf4wxo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="slplf4wxo"/>`,
		"fallback": "icons8:translation",
	});
}

export default Component;
