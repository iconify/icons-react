import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mph6v1b_g.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mph6v1b_g"/>`,
		"fallback": "fa6-solid:martini-glass-citrus",
	});
}

export default Component;
