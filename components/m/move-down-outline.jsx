import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vd4mgibiv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vd4mgibiv"/>`,
		"fallback": "lsicon:move-down-outline",
	});
}

export default Component;
