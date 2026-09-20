import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bw3tawb3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bw3tawb3h"/>`,
		"fallback": "ri:user-4-line",
	});
}

export default Component;
