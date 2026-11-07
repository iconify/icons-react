import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfh8-9bxl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfh8-9bxl"/>`,
		"fallback": "selfhst:mousehole-dark",
	});
}

export default Component;
