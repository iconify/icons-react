import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-bi-qb3v.css';

const viewBox = {"width":15,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-bi-qb3v"/>`,
		"fallback": "octicon:tag",
	});
}

export default Component;
