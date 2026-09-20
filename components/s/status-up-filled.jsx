import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1kijww4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c1kijww4n"/>`,
		"fallback": "reicon:status-up-filled",
	});
}

export default Component;
