import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djw0pcgoi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djw0pcgoi"/>`,
		"fallback": "iconoir:shield",
	});
}

export default Component;
