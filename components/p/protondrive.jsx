import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/og2z5b78e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="og2z5b78e"/>`,
		"fallback": "simple-icons:protondrive",
	});
}

export default Component;
