import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sam6x3bvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sam6x3bvx"/>`,
		"fallback": "struq:sort-az",
	});
}

export default Component;
