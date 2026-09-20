import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ep9p_6bud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ep9p_6bud"/>`,
		"fallback": "mi:print",
	});
}

export default Component;
