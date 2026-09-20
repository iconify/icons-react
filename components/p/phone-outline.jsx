import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s86q4zppz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s86q4zppz"/>`,
		"fallback": "solar:phone-outline",
	});
}

export default Component;
