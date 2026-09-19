import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jl-5hpb0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jl-5hpb0i"/>`,
		"fallback": "hugeicons:tick-01",
	});
}

export default Component;
