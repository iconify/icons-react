import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yksjou5qt.css';

const viewBox = {"width":13,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yksjou5qt"/>`,
		"fallback": "octicon:list-ordered",
	});
}

export default Component;
