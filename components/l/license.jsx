import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yd1-qvbma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yd1-qvbma"/>`,
		"fallback": "tabler:license",
	});
}

export default Component;
