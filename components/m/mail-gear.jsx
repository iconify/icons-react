import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tipkj9b9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tipkj9b9i"/>`,
		"fallback": "noviair-light:mail-gear",
	});
}

export default Component;
