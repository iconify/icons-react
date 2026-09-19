import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-vex2b7c.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-vex2b7c"/>`,
		"fallback": "dinkie-icons:radioactive-small",
	});
}

export default Component;
