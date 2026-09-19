import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdvz9kbzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdvz9kbzt"/>`,
		"fallback": "boxicons:surfboard-filled",
	});
}

export default Component;
