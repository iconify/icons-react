import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cnb-2sb7l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cnb-2sb7l"/>`,
		"fallback": "dashicons:tagcloud",
	});
}

export default Component;
