import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx1y8db6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jx1y8db6v"/>`,
		"fallback": "noviair:quote",
	});
}

export default Component;
