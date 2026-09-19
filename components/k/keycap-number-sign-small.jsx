import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5x2r3blr.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p5x2r3blr"/>`,
		"fallback": "dinkie-icons:keycap-number-sign-small",
	});
}

export default Component;
