import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtxts7b0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jtxts7b0r"/>`,
		"fallback": "tabler:urgent",
	});
}

export default Component;
