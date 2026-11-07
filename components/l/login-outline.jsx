import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfi9t8bxj.css';
import '../../css/z/zw-inltah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfi9t8bxj"/><path class="zw-inltah"/>`,
		"fallback": "solar:login-outline",
	});
}

export default Component;
