import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbw1h3bht.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbw1h3bht"/>`,
		"fallback": "la:subway",
	});
}

export default Component;
