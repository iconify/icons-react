import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbrgv8z2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbrgv8z2m"/>`,
		"fallback": "reicon:users2-filled",
	});
}

export default Component;
