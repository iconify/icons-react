import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jl_1o55vc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jl_1o55vc"/>`,
		"fallback": "mingcute:settings-6-line",
	});
}

export default Component;
