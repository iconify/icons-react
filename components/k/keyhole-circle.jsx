import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i5fbz5d6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i5fbz5d6u"/>`,
		"fallback": "uis:keyhole-circle",
	});
}

export default Component;
