import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jatr1b-pp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jatr1b-pp"/>`,
		"fallback": "andrsrxn:list-ordered",
	});
}

export default Component;
