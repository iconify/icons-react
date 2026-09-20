import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzlx0ujqo.css';

const viewBox = {"width":14,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzlx0ujqo"/>`,
		"fallback": "octicon:issue-reopened",
	});
}

export default Component;
