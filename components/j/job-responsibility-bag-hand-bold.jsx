import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmd_g055q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmd_g055q"/>`,
		"fallback": "streamline-ultimate:job-responsibility-bag-hand-bold",
	});
}

export default Component;
