import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0yt2ixme.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0yt2ixme"/>`,
		"fallback": "heroicons-solid:sort-descending",
	});
}

export default Component;
