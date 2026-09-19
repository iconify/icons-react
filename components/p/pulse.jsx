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
		"content": `<polyline points="1.75 8.25 4.25 8.25 6.25 3.75 9.75 12.25 11.75 8.25 14.25 8.25" class="hntgybcog"/>`,
		"fallback": "charm:pulse",
	});
}

export default Component;
