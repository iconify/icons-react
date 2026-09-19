import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjp8ftb9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fjp8ftb9n"/>`,
		"fallback": "grommet-icons:script",
	});
}

export default Component;
