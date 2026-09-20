import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jo1m2dgns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jo1m2dgns"/>`,
		"fallback": "reicon:sim-filled",
	});
}

export default Component;
