import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czi0srbta.css';
import '../../css/c/cdpzc0bqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czi0srbta"/><path class="cdpzc0bqn"/>`,
		"fallback": "pixel:users-crown",
	});
}

export default Component;
