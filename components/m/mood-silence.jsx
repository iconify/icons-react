import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/psn7qac5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="psn7qac5y"/>`,
		"fallback": "tabler:mood-silence",
	});
}

export default Component;
