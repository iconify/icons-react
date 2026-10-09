import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_bfm19uh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_bfm19uh"/>`,
		"fallback": "energy-icons:plane-20-bold",
	});
}

export default Component;
