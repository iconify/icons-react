import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1uavwwpy.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1uavwwpy"/>`,
		"fallback": "pinhead:slice-of-pan-bread-outline",
	});
}

export default Component;
