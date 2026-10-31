import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ex6wvdbwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ex6wvdbwp"/>`,
		"fallback": "withicons:octagon-x-gloss",
	});
}

export default Component;
