import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7qg_wqtb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7qg_wqtb"/>`,
		"fallback": "withicons:pound-sterling-solid",
	});
}

export default Component;
