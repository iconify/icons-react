import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_md5nbmj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_md5nbmj"/>`,
		"fallback": "garden:lightbulb-fill-16",
	});
}

export default Component;
