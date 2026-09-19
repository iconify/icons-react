import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zx0608zwu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zx0608zwu"/>`,
		"fallback": "dashicons:shield-alt",
	});
}

export default Component;
