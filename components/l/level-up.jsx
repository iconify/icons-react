import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qt4lrqb6u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qt4lrqb6u"/>`,
		"fallback": "entypo:level-up",
	});
}

export default Component;
