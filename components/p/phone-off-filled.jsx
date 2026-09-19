import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hi0b81b5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hi0b81b5i"/>`,
		"fallback": "griddy-icons:phone-off-filled",
	});
}

export default Component;
