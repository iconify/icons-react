import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iyc7oevht.css';
import '../../css/a/abs0vhb6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iyc7oevht"/><path clip-rule="evenodd" class="abs0vhb6t"/>`,
		"fallback": "solar:wallet-2-outline",
	});
}

export default Component;
