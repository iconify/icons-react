import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fn3iwubds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fn3iwubds"/>`,
		"fallback": "guidance:no-alcohol",
	});
}

export default Component;
