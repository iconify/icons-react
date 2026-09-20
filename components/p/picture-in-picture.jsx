import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6kk9dbkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t6kk9dbkg"/>`,
		"fallback": "keyline-icons:picture-in-picture",
	});
}

export default Component;
