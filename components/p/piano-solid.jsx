import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfbk5nxgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfbk5nxgd"/>`,
		"fallback": "iconaut:piano-solid",
	});
}

export default Component;
