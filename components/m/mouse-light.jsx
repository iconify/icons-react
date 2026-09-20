import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/d/d0h36taxe.css';
import '../../css/r/rmnh1fbii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="d0h36taxe"/><path class="rmnh1fbii"/></g>`,
		"fallback": "lets-icons:mouse-light",
	});
}

export default Component;
