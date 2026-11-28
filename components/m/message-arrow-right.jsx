import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-pp4uinw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-pp4uinw"/>`,
		"fallback": "noviair-light:message-arrow-right",
	});
}

export default Component;
