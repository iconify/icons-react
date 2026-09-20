import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phg7sez3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phg7sez3e"/>`,
		"fallback": "reicon:pen-line-filled",
	});
}

export default Component;
