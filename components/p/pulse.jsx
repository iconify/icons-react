import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jd5p1nvyu.css';

const viewBox = {"width":14,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jd5p1nvyu"/>`,
		"fallback": "octicon:pulse",
	});
}

export default Component;
