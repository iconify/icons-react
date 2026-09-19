import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbcu3ob4v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jbcu3ob4v"/>`,
		"fallback": "garden:linkedin-fill-16",
	});
}

export default Component;
