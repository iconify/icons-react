import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9fsllkmh.css';
import '../../css/o/ocy9tacha.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9fsllkmh"/><path class="ocy9tacha"/>`,
		"fallback": "energy-icons:monopole-pylon-20-bold",
	});
}

export default Component;
