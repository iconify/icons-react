import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<polyline points="2.75 8.75 6.25 12.25 13.25 4.75" class="hntgybcog"/>`,
		"fallback": "charm:tick",
	});
}

export default Component;
