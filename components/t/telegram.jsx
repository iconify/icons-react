import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dk1ssk6fg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dk1ssk6fg"/>`,
		"fallback": "fontisto:telegram",
	});
}

export default Component;
