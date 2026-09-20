import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eoj0_sxob.css';
import '../../css/v/voqlvbrhf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eoj0_sxob"/><path class="voqlvbrhf"/>`,
		"fallback": "octicon:issue-closed-16",
	});
}

export default Component;
