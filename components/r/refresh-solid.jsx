import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enqf0ab1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="enqf0ab1l"/>`,
		"fallback": "withicons:refresh-solid",
	});
}

export default Component;
