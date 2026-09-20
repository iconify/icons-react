import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzrnlbcey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="dzrnlbcey"/>`,
		"fallback": "wordpress:tablet",
	});
}

export default Component;
