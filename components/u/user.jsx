import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kinzzobxi.css';

const viewBox = {"width":718,"height":669};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kinzzobxi"/>`,
		"fallback": "ls:user",
	});
}

export default Component;
