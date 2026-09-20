import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehue37sqz.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehue37sqz"/>`,
		"fallback": "picon:sidelist",
	});
}

export default Component;
