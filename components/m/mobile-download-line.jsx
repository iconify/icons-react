import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/neebi438u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="neebi438u"/>`,
		"fallback": "ri:mobile-download-line",
	});
}

export default Component;
