import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzc8m079p.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzc8m079p"/>`,
		"fallback": "garden:maximize-fill-12",
	});
}

export default Component;
