import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tkl6re2ft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tkl6re2ft"/>`,
		"fallback": "gg:menu-oreos",
	});
}

export default Component;
