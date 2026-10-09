import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tyffe9boh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tyffe9boh"/>`,
		"fallback": "energy-icons:minus-20",
	});
}

export default Component;
