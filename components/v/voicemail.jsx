import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rb62anb9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rb62anb9c"/>`,
		"fallback": "noviair-light:voicemail",
	});
}

export default Component;
