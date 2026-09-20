import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbiaez1sj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbiaez1sj"/>`,
		"fallback": "streamline-ultimate:laptop-bold",
	});
}

export default Component;
