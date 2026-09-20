import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yy931_b9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yy931_b9x"/>`,
		"fallback": "ri:pixelfed-line",
	});
}

export default Component;
