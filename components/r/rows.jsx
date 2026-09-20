import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oowe2cb9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oowe2cb9r"/>`,
		"fallback": "mynaui:rows",
	});
}

export default Component;
