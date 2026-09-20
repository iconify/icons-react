import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3e44p1-n.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o3e44p1-n"/>`,
		"fallback": "thesvg-color:planetscale-dark",
	});
}

export default Component;
