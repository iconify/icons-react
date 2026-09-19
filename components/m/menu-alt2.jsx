import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i25j6_12l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i25j6_12l"/>`,
		"fallback": "dashicons:menu-alt2",
	});
}

export default Component;
