import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkmqn04ch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkmqn04ch"/>`,
		"fallback": "noviair:mic-off",
	});
}

export default Component;
