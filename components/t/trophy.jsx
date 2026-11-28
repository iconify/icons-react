import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oi8leltrn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oi8leltrn"/>`,
		"fallback": "noviair:trophy",
	});
}

export default Component;
