import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cx-1oj1vb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cx-1oj1vb"/>`,
		"fallback": "iconoir:medal-solid",
	});
}

export default Component;
