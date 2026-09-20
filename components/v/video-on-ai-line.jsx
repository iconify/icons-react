import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oux_cgbkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oux_cgbkm"/>`,
		"fallback": "ri:video-on-ai-line",
	});
}

export default Component;
