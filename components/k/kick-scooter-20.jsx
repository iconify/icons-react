import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2wsqgbwj.css';
import '../../css/j/jzphsob0e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2wsqgbwj"/><path class="jzphsob0e"/>`,
		"fallback": "energy-icons:kick-scooter-20",
	});
}

export default Component;
