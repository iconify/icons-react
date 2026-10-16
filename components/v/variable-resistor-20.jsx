import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gd76n1f0v.css';
import '../../css/f/flk8b6but.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gd76n1f0v"/><path class="flk8b6but"/>`,
		"fallback": "energy-icons:variable-resistor-20",
	});
}

export default Component;
