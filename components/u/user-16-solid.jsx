import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aq7inhbvo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aq7inhbvo"/>`,
		"fallback": "heroicons:user-16-solid",
	});
}

export default Component;
