import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/td9g1kbtl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="td9g1kbtl"/>`,
		"fallback": "octicon:octoface",
	});
}

export default Component;
