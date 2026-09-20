import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f54y-9dgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f54y-9dgd"/>`,
		"fallback": "tabler:square-rounded-letter-c-filled",
	});
}

export default Component;
