import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otzh3hbtm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otzh3hbtm"/>`,
		"fallback": "guidance:parking",
	});
}

export default Component;
