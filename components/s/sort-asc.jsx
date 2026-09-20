import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_229_bgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_229_bgf"/>`,
		"fallback": "ri:sort-asc",
	});
}

export default Component;
