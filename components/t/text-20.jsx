import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xaqgxrbrf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xaqgxrbrf"/>`,
		"fallback": "garden:text-20",
	});
}

export default Component;
