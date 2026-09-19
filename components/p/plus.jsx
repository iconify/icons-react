import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rs-0-pq3l.css';

const viewBox = {"width":717,"height":715};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rs-0-pq3l"/>`,
		"fallback": "ls:plus",
	});
}

export default Component;
