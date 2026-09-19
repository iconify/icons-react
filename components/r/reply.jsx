import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_o7jfard.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r_o7jfard"/>`,
		"fallback": "griddy-icons:reply",
	});
}

export default Component;
