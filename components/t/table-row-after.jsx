import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7gp0_b7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="f7gp0_b7m"/>`,
		"fallback": "wordpress:table-row-after",
	});
}

export default Component;
