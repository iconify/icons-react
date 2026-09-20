import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jo664i1hk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jo664i1hk"/>`,
		"fallback": "uil:vector-square-alt",
	});
}

export default Component;
