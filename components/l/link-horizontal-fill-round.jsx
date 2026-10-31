import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cc33240jl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cc33240jl"/>`,
		"fallback": "coolicons:link-horizontal-fill-round",
	});
}

export default Component;
