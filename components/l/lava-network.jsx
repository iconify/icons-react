import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5azz4pov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5azz4pov"/>`,
		"fallback": "token:lava-network",
	});
}

export default Component;
