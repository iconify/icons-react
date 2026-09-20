import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/olkmp-6tv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="olkmp-6tv"/>`,
		"fallback": "ri:landscape-ai-fill",
	});
}

export default Component;
