import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3whunbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3whunbvv"/>`,
		"fallback": "fontisto:npm",
	});
}

export default Component;
