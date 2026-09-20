import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y70-_76-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y70-_76-u"/>`,
		"fallback": "reicon:password-check-filled",
	});
}

export default Component;
