import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1dnwv6dy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r1dnwv6dy"/>`,
		"fallback": "guidance:no-noise",
	});
}

export default Component;
