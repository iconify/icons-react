import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0i14acnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0i14acnk"/>`,
		"fallback": "mdi-light:refresh",
	});
}

export default Component;
