import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j29l6eqzi.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j29l6eqzi"/>`,
		"fallback": "pinhead:life-ring",
	});
}

export default Component;
