import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xq32-81to.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xq32-81to"/>`,
		"fallback": "dashicons:search",
	});
}

export default Component;
