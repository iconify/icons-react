import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-vkvrb4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-vkvrb4p"/>`,
		"fallback": "thesvg-color:openstreetmap",
	});
}

export default Component;
