import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dq4l7_blz.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dq4l7_blz"/>`,
		"fallback": "dinkie-icons:mic",
	});
}

export default Component;
