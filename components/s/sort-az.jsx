import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pn6k9gwzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pn6k9gwzh"/>`,
		"fallback": "gg:sort-az",
	});
}

export default Component;
