import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2wq_1rqv.css';

const viewBox = {"width":1024,"height":704};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y2wq_1rqv"/>`,
		"fallback": "whh:vtiger",
	});
}

export default Component;
