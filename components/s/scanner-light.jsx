import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v0o_i3b1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v0o_i3b1i"/>`,
		"fallback": "iconamoon:scanner-light",
	});
}

export default Component;
