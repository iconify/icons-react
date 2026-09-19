import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srwnm0noq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="srwnm0noq"/>`,
		"fallback": "bi:pause",
	});
}

export default Component;
