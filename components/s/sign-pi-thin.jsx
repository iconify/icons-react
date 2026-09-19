import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h29i8abyw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h29i8abyw"/>`,
		"fallback": "iconamoon:sign-pi-thin",
	});
}

export default Component;
