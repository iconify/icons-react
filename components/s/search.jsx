import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urath4yqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="urath4yqn"/>`,
		"fallback": "fe:search",
	});
}

export default Component;
