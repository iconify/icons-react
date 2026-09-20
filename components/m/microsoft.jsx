import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjjpr3yel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjjpr3yel"/>`,
		"fallback": "meteor-icons:microsoft",
	});
}

export default Component;
