import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbm9lqs2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbm9lqs2t"/>`,
		"fallback": "hugeicons:menu-two-line",
	});
}

export default Component;
