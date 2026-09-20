import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkw7-5bhr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkw7-5bhr"/>`,
		"fallback": "ri:mail-lock-fill",
	});
}

export default Component;
