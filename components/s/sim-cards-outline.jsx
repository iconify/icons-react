import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5yhef5il.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m5yhef5il"/>`,
		"fallback": "solar:sim-cards-outline",
	});
}

export default Component;
