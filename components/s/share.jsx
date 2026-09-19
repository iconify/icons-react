import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhh4_4chj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhh4_4chj"/>`,
		"fallback": "feather:share",
	});
}

export default Component;
