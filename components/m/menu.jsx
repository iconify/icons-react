import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_6gxrb7d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p_6gxrb7d"/>`,
		"fallback": "pepicons:menu",
	});
}

export default Component;
