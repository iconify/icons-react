import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdui42b6r.css';
import '../../css/j/j6e6uqpop.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdui42b6r"/><path class="j6e6uqpop"/>`,
		"fallback": "energy-icons:money-bag-20-bold",
	});
}

export default Component;
