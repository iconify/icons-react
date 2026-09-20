import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fyl1gibss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fyl1gibss"/>`,
		"fallback": "lets-icons:vertical-switch",
	});
}

export default Component;
