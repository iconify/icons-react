import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6si3pb8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6si3pb8w"/>`,
		"fallback": "tabler:swipe-up-filled",
	});
}

export default Component;
