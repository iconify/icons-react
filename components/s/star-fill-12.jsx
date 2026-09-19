import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lk0rmxbps.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lk0rmxbps"/>`,
		"fallback": "garden:star-fill-12",
	});
}

export default Component;
