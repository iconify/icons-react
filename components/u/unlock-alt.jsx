import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yh4a7_p0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yh4a7_p0s"/>`,
		"fallback": "uil:unlock-alt",
	});
}

export default Component;
