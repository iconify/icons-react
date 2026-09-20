import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azxr97--q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azxr97--q"/>`,
		"fallback": "octicon:unverified",
	});
}

export default Component;
