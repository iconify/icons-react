import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4xs89buj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4xs89buj"/>`,
		"fallback": "noviair:watering-can-clock",
	});
}

export default Component;
