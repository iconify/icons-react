import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9nes1u6z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9nes1u6z"/>`,
		"fallback": "ooui:vertical-ellipsis",
	});
}

export default Component;
