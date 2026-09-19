import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8am-97fg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c8am-97fg"/>`,
		"fallback": "griddy-icons:pet-friendly-filled",
	});
}

export default Component;
