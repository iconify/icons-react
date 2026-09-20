import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdg5asb1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="wdg5asb1p"/>`,
		"fallback": "wordpress:query-pagination-previous",
	});
}

export default Component;
