import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ur-iyhbir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ur-iyhbir"/>`,
		"fallback": "withicons:traffic-cone-gloss",
	});
}

export default Component;
