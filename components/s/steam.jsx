import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-v5rpg1l.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-v5rpg1l"/>`,
		"fallback": "fa7-brands:steam",
	});
}

export default Component;
