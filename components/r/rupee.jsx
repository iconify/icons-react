import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdzxwwv5r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vdzxwwv5r"/>`,
		"fallback": "icons8:rupee",
	});
}

export default Component;
