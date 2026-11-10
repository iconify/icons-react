import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9mmi8b6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9mmi8b6z"/>`,
		"fallback": "lucide:stroke-line-join-miter",
	});
}

export default Component;
