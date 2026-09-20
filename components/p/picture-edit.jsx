import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/np37u6blj.css';

const viewBox = {"width":20,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="np37u6blj"/>`,
		"fallback": "jam:picture-edit",
	});
}

export default Component;
