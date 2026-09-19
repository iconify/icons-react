import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dc5kio9th.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dc5kio9th"/>`,
		"fallback": "griddy-icons:linux",
	});
}

export default Component;
