import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rilp_eb_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rilp_eb_z"/>`,
		"fallback": "ri:map-2-fill",
	});
}

export default Component;
