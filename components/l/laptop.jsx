import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmqe0vb1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmqe0vb1o"/>`,
		"fallback": "streamline-ultimate:laptop",
	});
}

export default Component;
