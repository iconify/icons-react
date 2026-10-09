import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgs6dobqh.css';
import '../../css/o/o1usrlbra.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgs6dobqh"/><path class="o1usrlbra"/>`,
		"fallback": "energy-icons:pier-20",
	});
}

export default Component;
