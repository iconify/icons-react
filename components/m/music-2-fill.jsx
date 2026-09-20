import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-7g8hbqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-7g8hbqq"/>`,
		"fallback": "ri:music-2-fill",
	});
}

export default Component;
