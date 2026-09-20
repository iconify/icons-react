import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljsm-y-7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljsm-y-7l"/>`,
		"fallback": "simple-icons:sitepoint",
	});
}

export default Component;
