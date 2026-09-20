import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5jpbbtfz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5jpbbtfz"/>`,
		"fallback": "pinhead:spoon-and-chefs-knife-and-pot",
	});
}

export default Component;
