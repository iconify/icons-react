import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkn6c9j5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkn6c9j5d"/>`,
		"fallback": "boxicons:toy-car",
	});
}

export default Component;
