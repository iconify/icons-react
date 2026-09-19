import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylpsw_5zo.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ylpsw_5zo"/>`,
		"fallback": "dinkie-icons:t-rex",
	});
}

export default Component;
