import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wr7obeqxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wr7obeqxm"/>`,
		"fallback": "vadivam:list-chevrons-up-down",
	});
}

export default Component;
