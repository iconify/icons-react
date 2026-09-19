import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmsy4ybos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmsy4ybos"/>`,
		"fallback": "iconoir:phone",
	});
}

export default Component;
