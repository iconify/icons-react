import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmh1iue4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmh1iue4y"/>`,
		"fallback": "iconoir:unjoin-3d",
	});
}

export default Component;
