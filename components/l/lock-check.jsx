import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f87tu5f-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f87tu5f-i"/>`,
		"fallback": "noviair:lock-check",
	});
}

export default Component;
