import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jyn9tsk4r.css';

const viewBox = {"width":15,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jyn9tsk4r"/>`,
		"fallback": "fontisto:mobile-alt",
	});
}

export default Component;
