import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a8f--c0up.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a8f--c0up"/>`,
		"fallback": "reicon:text-bold",
	});
}

export default Component;
