import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lf7ojlgcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lf7ojlgcp"/>`,
		"fallback": "ri:moon-fill",
	});
}

export default Component;
