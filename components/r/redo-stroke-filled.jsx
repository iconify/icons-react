import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cj9e8cckx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cj9e8cckx"/>`,
		"fallback": "boxicons:redo-stroke-filled",
	});
}

export default Component;
