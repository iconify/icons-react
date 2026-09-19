import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yy8t4sbbm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yy8t4sbbm"/>`,
		"fallback": "heroicons:play-16-solid",
	});
}

export default Component;
