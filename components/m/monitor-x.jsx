import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cts1-qbke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cts1-qbke"/>`,
		"fallback": "noviair-light:monitor-x",
	});
}

export default Component;
