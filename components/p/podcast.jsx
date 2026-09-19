import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/on57_q5jc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="on57_q5jc"/>`,
		"fallback": "griddy-icons:podcast",
	});
}

export default Component;
