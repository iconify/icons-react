import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-7qc0-gs.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-7qc0-gs"/>`,
		"fallback": "jam:user-plus",
	});
}

export default Component;
