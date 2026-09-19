import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvr54ob0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvr54ob0i"/>`,
		"fallback": "iconamoon:phone-thin",
	});
}

export default Component;
