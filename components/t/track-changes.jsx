import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/erlzuhi3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="erlzuhi3g"/>`,
		"fallback": "mdi:track-changes",
	});
}

export default Component;
