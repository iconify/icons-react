import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f72o4bbwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f72o4bbwd"/>`,
		"fallback": "gg:spinner-alt",
	});
}

export default Component;
