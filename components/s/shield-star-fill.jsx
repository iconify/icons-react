import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_nxf9b7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_nxf9b7j"/>`,
		"fallback": "ri:shield-star-fill",
	});
}

export default Component;
