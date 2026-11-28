import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jab0fccmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jab0fccmk"/>`,
		"fallback": "noviair:octopus",
	});
}

export default Component;
