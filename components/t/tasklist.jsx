import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zhhej5x8u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zhhej5x8u"/>`,
		"fallback": "octicon:tasklist",
	});
}

export default Component;
