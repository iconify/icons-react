import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gq3ncxbmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gq3ncxbmk"/>`,
		"fallback": "solar:plane-2-outline",
	});
}

export default Component;
