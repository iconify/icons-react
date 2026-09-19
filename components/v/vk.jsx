import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/au417ft5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="au417ft5l"/>`,
		"fallback": "fontisto:vk",
	});
}

export default Component;
