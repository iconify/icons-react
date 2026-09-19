import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ao1b5d6rv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ao1b5d6rv"/>`,
		"fallback": "guidance:service-animal-2",
	});
}

export default Component;
