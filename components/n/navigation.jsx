import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jc3rm7mko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jc3rm7mko"/>`,
		"fallback": "vadivam:navigation",
	});
}

export default Component;
