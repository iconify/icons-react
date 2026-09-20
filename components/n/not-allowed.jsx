import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dp1g0tbrs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="dp1g0tbrs"/>`,
		"fallback": "wordpress:not-allowed",
	});
}

export default Component;
