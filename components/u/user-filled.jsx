import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7y10vixf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7y10vixf"/>`,
		"fallback": "boxicons:user-filled",
	});
}

export default Component;
