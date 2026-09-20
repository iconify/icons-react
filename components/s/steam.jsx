import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ab6fy1brh.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ab6fy1brh"/>`,
		"fallback": "picon:steam",
	});
}

export default Component;
