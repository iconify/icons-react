import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/duvy2ibrs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duvy2ibrs"/>`,
		"fallback": "gravity-ui:minus-shape-fill",
	});
}

export default Component;
