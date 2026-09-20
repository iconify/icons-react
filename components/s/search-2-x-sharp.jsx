import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lb5mbg0ow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lb5mbg0ow"/>`,
		"fallback": "keyline-icons:search-2-x-sharp",
	});
}

export default Component;
