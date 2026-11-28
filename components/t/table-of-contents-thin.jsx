import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpfpqpbll.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vpfpqpbll"/>`,
		"fallback": "pullo:table-of-contents-thin",
	});
}

export default Component;
