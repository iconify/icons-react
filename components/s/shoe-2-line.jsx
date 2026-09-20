import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hlv3huuyr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hlv3huuyr"/>`,
		"fallback": "mingcute:shoe-2-line",
	});
}

export default Component;
