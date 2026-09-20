import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/giho2bore.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="giho2bore"/>`,
		"fallback": "tabler:letter-i-small",
	});
}

export default Component;
