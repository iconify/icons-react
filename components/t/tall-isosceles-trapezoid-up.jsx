import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-42yhbna.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-42yhbna"/>`,
		"fallback": "pinhead:tall-isosceles-trapezoid-up",
	});
}

export default Component;
