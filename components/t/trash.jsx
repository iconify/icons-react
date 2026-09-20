import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjz1nm3be.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qjz1nm3be"/>`,
		"fallback": "memory:trash",
	});
}

export default Component;
