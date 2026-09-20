import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfqk80y7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="dfqk80y7p"/>`,
		"fallback": "wordpress:line-dotted",
	});
}

export default Component;
