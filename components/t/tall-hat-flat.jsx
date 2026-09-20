import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dr9n3xn2m.css';
import '../../css/c/cm9npibhp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dr9n3xn2m"/><path clip-rule="evenodd" class="cm9npibhp"/></g>`,
		"fallback": "streamline-color:tall-hat-flat",
	});
}

export default Component;
