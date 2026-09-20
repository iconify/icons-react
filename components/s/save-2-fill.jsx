import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_wz2g67s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_wz2g67s"/>`,
		"fallback": "ri:save-2-fill",
	});
}

export default Component;
