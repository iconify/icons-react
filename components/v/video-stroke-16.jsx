import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sr02l2t6n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sr02l2t6n"/>`,
		"fallback": "garden:video-stroke-16",
	});
}

export default Component;
