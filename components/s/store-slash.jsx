import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vopjp-b_w.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vopjp-b_w"/>`,
		"fallback": "fa-solid:store-slash",
	});
}

export default Component;
