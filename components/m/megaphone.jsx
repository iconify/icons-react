import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3by0zb_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="w3by0zb_c"/>`,
		"fallback": "wordpress:megaphone",
	});
}

export default Component;
