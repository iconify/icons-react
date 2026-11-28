import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bauv5ofyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bauv5ofyh primary"/>`,
		"fallback": "iconaut:square-off-duotone",
	});
}

export default Component;
