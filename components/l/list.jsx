import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwovrsb9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwovrsb9z"/>`,
		"fallback": "iconoir:list",
	});
}

export default Component;
