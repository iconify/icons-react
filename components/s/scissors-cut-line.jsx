import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/leh_dcb5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="leh_dcb5z"/>`,
		"fallback": "ri:scissors-cut-line",
	});
}

export default Component;
