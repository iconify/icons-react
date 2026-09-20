import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mb8dg2b0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mb8dg2b0m"/>`,
		"fallback": "tabler:letter-a",
	});
}

export default Component;
