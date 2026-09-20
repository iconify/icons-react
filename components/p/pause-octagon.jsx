import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9fa5o8gu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u9fa5o8gu"/>`,
		"fallback": "lucide:pause-octagon",
	});
}

export default Component;
