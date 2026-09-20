import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v5j4oqb3x.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v5j4oqb3x"/>`,
		"fallback": "lineicons:invest-monitor",
	});
}

export default Component;
