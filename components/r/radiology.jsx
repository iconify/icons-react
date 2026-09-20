import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2x7t-b5p.css';
import '../../css/i/i9nyku57s.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2x7t-b5p"/><path class="i9nyku57s"/>`,
		"fallback": "medical-icon:radiology",
	});
}

export default Component;
