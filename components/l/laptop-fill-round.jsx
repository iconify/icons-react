import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjgx2qbcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjgx2qbcs"/>`,
		"fallback": "coolicons:laptop-fill-round",
	});
}

export default Component;
