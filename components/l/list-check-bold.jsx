import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtz_hcc5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rtz_hcc5w"/>`,
		"fallback": "solar:list-check-bold",
	});
}

export default Component;
