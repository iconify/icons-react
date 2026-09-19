import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rw4ipkbfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rw4ipkbfv"/>`,
		"fallback": "eva:twitter-outline",
	});
}

export default Component;
