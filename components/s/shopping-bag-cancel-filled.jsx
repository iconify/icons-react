import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc1rkybia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc1rkybia"/>`,
		"fallback": "griddy-icons:shopping-bag-cancel-filled",
	});
}

export default Component;
