import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifvm5m-6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ifvm5m-6j"/>`,
		"fallback": "vadivam:lens-convex",
	});
}

export default Component;
