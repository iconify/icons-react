import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdii07f6m.css';

const viewBox = {"width":20,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdii07f6m"/>`,
		"fallback": "jam:tab",
	});
}

export default Component;
