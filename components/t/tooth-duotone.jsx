import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-3sfv_0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary t-3sfv_0c"/>`,
		"fallback": "iconaut:tooth-duotone",
	});
}

export default Component;
