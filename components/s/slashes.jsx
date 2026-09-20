import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1jl_9b0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1jl_9b0n"/>`,
		"fallback": "tabler:slashes",
	});
}

export default Component;
