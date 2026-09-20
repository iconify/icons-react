import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8x6g5o0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8x6g5o0r"/>`,
		"fallback": "tabler:transition-right-filled",
	});
}

export default Component;
