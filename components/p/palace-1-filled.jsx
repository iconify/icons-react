import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfnqrjbwb.css';
import '../../css/f/ft8o1xber.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfnqrjbwb"/><path class="ft8o1xber"/>`,
		"fallback": "tdesign:palace-1-filled",
	});
}

export default Component;
