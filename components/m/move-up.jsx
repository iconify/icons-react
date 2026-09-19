import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgqkzk5ef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bgqkzk5ef"/>`,
		"fallback": "iconoir:move-up",
	});
}

export default Component;
