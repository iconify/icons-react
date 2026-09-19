import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h14yaqw0b.css';

const viewBox = {"width":23,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h14yaqw0b"/>`,
		"fallback": "fontisto:step-backwrad",
	});
}

export default Component;
