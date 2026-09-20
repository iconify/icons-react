import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/elsly3bbt.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="elsly3bbt"/>`,
		"fallback": "memory:message-text",
	});
}

export default Component;
