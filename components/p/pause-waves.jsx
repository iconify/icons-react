import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ki9nf03-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ki9nf03-s"/>`,
		"fallback": "mynaui:pause-waves",
	});
}

export default Component;
