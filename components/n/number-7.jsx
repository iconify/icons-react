import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j092k7ert.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j092k7ert"/>`,
		"fallback": "ri:number-7",
	});
}

export default Component;
