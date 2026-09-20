import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnae6_w-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gnae6_w-h"/>`,
		"fallback": "ri:opera-fill",
	});
}

export default Component;
