import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ead2_1bie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ead2_1bie"/>`,
		"fallback": "solar:lock-outline",
	});
}

export default Component;
