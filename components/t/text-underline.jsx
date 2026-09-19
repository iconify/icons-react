import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sq-n_37ce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sq-n_37ce"/>`,
		"fallback": "griddy-icons:text-underline",
	});
}

export default Component;
