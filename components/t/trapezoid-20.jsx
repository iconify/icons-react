import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f51_hbcsx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f51_hbcsx"/>`,
		"fallback": "energy-icons:trapezoid-20",
	});
}

export default Component;
