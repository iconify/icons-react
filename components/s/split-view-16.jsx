import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bk3h7-bti.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bk3h7-bti"/>`,
		"fallback": "octicon:split-view-16",
	});
}

export default Component;
