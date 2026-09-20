import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-u0a7jne.css';
import '../../css/f/fqkduubpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-u0a7jne"/><path clip-rule="evenodd" class="fqkduubpx"/>`,
		"fallback": "lineicons:school-bench-1",
	});
}

export default Component;
