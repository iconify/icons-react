import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqxm_jb4u.css';

const viewBox = {"width":21,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqxm_jb4u"/>`,
		"fallback": "fontisto:shopping-bag",
	});
}

export default Component;
