import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_wfg7c_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_wfg7c_c"/>`,
		"fallback": "mdi:puzzle",
	});
}

export default Component;
