import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_nn80bhj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_nn80bhj"/>`,
		"fallback": "carbon:load-balancer-classic",
	});
}

export default Component;
