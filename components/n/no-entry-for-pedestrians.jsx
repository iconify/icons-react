import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bynk47z_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bynk47z_c"/>`,
		"fallback": "guidance:no-entry-for-pedestrians",
	});
}

export default Component;
