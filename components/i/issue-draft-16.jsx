import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h07uw39fs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h07uw39fs"/>`,
		"fallback": "octicon:issue-draft-16",
	});
}

export default Component;
