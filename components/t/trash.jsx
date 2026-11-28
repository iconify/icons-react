import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6drfobrn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t6drfobrn"/>`,
		"fallback": "noviair-light:trash",
	});
}

export default Component;
