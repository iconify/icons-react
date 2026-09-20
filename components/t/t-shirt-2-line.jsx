import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okothmo9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okothmo9s"/>`,
		"fallback": "ri:t-shirt-2-line",
	});
}

export default Component;
