import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jn_w_2b5n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jn_w_2b5n"/>`,
		"fallback": "zondicons:wallet",
	});
}

export default Component;
