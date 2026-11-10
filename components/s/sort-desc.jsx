import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjdt1_b8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjdt1_b8i"/>`,
		"fallback": "andrsrxn:sort-desc",
	});
}

export default Component;
