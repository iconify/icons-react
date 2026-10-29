import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhv89ymdt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhv89ymdt"/>`,
		"fallback": "withicons:list-solid",
	});
}

export default Component;
