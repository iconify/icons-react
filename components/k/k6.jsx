import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5cc-ytzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5cc-ytzc"/>`,
		"fallback": "simple-icons:k6",
	});
}

export default Component;
