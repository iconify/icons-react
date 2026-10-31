import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uljkj_b_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uljkj_b_c"/>`,
		"fallback": "coolicons:tree-palm-fill-round",
	});
}

export default Component;
