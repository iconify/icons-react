import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bw3x_qbss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bw3x_qbss"/>`,
		"fallback": "ri:user-shared-line",
	});
}

export default Component;
