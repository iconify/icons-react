import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tfancdbym.css';
import '../../css/l/ll30d57at.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="tfancdbym"/><path vector-effect="non-scaling-stroke" class="ll30d57at"/></g>`,
		"fallback": "wordpress:query-pagination-numbers",
	});
}

export default Component;
