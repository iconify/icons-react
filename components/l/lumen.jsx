import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_zi44brh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_zi44brh"/>`,
		"fallback": "simple-icons:lumen",
	});
}

export default Component;
