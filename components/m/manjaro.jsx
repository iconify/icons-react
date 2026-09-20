import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7ezm804z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7ezm804z"/>`,
		"fallback": "simple-icons:manjaro",
	});
}

export default Component;
