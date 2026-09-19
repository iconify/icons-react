import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kje457rsc.css';
import '../../css/c/ckdfspy3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kje457rsc"/><path class="ckdfspy3l"/>`,
		"fallback": "circum:view-timeline",
	});
}

export default Component;
