import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lw448hmuf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lw448hmuf"/>`,
		"fallback": "mynaui:letter-t-octagon",
	});
}

export default Component;
