import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlde6rbmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jlde6rbmr"/>`,
		"fallback": "simple-icons:pi",
	});
}

export default Component;
