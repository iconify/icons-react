import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y39o-1t2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y39o-1t2y"/>`,
		"fallback": "boxicons:rows-4",
	});
}

export default Component;
