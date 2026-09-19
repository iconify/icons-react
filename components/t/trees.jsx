import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qw67gzbua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qw67gzbua"/>`,
		"fallback": "boxicons:trees",
	});
}

export default Component;
