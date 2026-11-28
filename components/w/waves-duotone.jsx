import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/df8v87a8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="df8v87a8v primary"/>`,
		"fallback": "iconaut:waves-duotone",
	});
}

export default Component;
