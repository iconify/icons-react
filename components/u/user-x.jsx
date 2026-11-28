import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbfvgk9hc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbfvgk9hc"/>`,
		"fallback": "noviair-light:user-x",
	});
}

export default Component;
