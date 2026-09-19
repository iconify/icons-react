import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htm0r7sqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htm0r7sqt"/>`,
		"fallback": "griddy-icons:laptop",
	});
}

export default Component;
