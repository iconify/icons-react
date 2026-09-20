import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afdx_obcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afdx_obcn"/>`,
		"fallback": "mdi:lightbulb-group-off-outline",
	});
}

export default Component;
