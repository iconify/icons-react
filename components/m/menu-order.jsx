import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bco-2qu9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bco-2qu9i"/>`,
		"fallback": "tabler:menu-order",
	});
}

export default Component;
