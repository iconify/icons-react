import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2btll5sy.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2btll5sy"/>`,
		"fallback": "dinkie-icons:left-arrow-circled",
	});
}

export default Component;
