import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8r7f676i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i8r7f676i"/>`,
		"fallback": "thesvg:vllm",
	});
}

export default Component;
