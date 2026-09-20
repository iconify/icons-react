import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/no27z1b-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="no27z1b-v"/>`,
		"fallback": "tabler:letter-g",
	});
}

export default Component;
