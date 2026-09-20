import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnd8sqbbd.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tnd8sqbbd"/>`,
		"fallback": "pinhead:isosceles-trapezoid-tall-down",
	});
}

export default Component;
