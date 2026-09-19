import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxd4l03gp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxd4l03gp"/>`,
		"fallback": "famicons:reorder-three-sharp",
	});
}

export default Component;
