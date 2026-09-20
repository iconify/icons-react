import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3k0dshgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3k0dshgk"/>`,
		"fallback": "mdi:user-multiple-add-outline",
	});
}

export default Component;
