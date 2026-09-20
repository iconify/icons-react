import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6fy3d2pj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6fy3d2pj"/>`,
		"fallback": "ri:share-box-fill",
	});
}

export default Component;
