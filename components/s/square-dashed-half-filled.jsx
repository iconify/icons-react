import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ox8tpsb8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b ox8tpsb8k"/>`,
		"fallback": "boxicons:square-dashed-half-filled",
	});
}

export default Component;
