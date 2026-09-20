import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hthj1nnsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hthj1nnsn"/>`,
		"fallback": "proicons:text-subscript",
	});
}

export default Component;
