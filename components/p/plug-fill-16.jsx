import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fs367gbhb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fs367gbhb"/>`,
		"fallback": "garden:plug-fill-16",
	});
}

export default Component;
