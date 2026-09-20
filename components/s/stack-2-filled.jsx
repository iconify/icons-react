import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kr1ca3b2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kr1ca3b2x"/>`,
		"fallback": "tabler:stack-2-filled",
	});
}

export default Component;
