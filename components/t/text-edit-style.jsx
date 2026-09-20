import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/un5ari44h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="un5ari44h"/>`,
		"fallback": "proicons:text-edit-style",
	});
}

export default Component;
