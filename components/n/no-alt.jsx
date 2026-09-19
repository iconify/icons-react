import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/px2_bsbru.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="px2_bsbru"/>`,
		"fallback": "dashicons:no-alt",
	});
}

export default Component;
