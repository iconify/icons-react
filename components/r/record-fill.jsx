import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfoeq1bpy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfoeq1bpy"/>`,
		"fallback": "bi:record-fill",
	});
}

export default Component;
