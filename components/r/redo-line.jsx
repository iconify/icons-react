import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kd6bc6ohl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kd6bc6ohl"/>`,
		"fallback": "majesticons:redo-line",
	});
}

export default Component;
