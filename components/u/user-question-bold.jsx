import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylh9a2_wt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ylh9a2_wt"/>`,
		"fallback": "streamline-ultimate:user-question-bold",
	});
}

export default Component;
