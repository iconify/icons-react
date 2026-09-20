import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvy6d57rr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvy6d57rr"/>`,
		"fallback": "lsicon:marketing-outline",
	});
}

export default Component;
