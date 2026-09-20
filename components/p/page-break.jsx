import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7-lexb6g.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r7-lexb6g"/>`,
		"fallback": "lineicons:page-break",
	});
}

export default Component;
