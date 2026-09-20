import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oteru_gyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oteru_gyc"/>`,
		"fallback": "ri:pause-large-fill",
	});
}

export default Component;
