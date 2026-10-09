import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfhtqhbtz.css';
import '../../css/d/du0tax8oo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfhtqhbtz"/><path class="du0tax8oo"/>`,
		"fallback": "energy-icons:jar-20-bold",
	});
}

export default Component;
