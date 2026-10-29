import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9v37qbuu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p9v37qbuu"/>`,
		"fallback": "withicons:volleyball-solid",
	});
}

export default Component;
