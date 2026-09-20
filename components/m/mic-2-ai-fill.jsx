import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ie_oe4beb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ie_oe4beb"/>`,
		"fallback": "ri:mic-2-ai-fill",
	});
}

export default Component;
