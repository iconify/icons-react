import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wh28ngeab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wh28ngeab"/>`,
		"fallback": "reicon:sidebar-bottom-filled",
	});
}

export default Component;
