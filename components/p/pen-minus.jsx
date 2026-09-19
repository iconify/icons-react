import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1buvgfsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o1buvgfsx"/>`,
		"fallback": "boxicons:pen-minus",
	});
}

export default Component;
