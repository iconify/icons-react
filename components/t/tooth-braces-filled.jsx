import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fd9-2o1_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fd9-2o1_l"/>`,
		"fallback": "griddy-icons:tooth-braces-filled",
	});
}

export default Component;
