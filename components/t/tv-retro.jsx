import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvky1g0pp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvky1g0pp"/>`,
		"fallback": "uil:tv-retro",
	});
}

export default Component;
