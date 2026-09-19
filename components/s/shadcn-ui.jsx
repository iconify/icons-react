import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p8c9qb1jl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b p8c9qb1jl"/>`,
		"fallback": "bxl:shadcn-ui",
	});
}

export default Component;
