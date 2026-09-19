import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gur7w6b5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gur7w6b5e"/>`,
		"fallback": "heroicons:trash",
	});
}

export default Component;
