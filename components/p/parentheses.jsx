import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-2te59_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-2te59_r"/>`,
		"fallback": "lucide:parentheses",
	});
}

export default Component;
