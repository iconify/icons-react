import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6qgw_b9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6qgw_b9e"/>`,
		"fallback": "iconamoon:unavailable-thin",
	});
}

export default Component;
