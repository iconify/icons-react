import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pse_y4bkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="pse_y4bkh"/>`,
		"fallback": "wordpress:loop",
	});
}

export default Component;
