import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/we6vmqb0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="we6vmqb0o"/>`,
		"fallback": "coolicons:volume-high-round",
	});
}

export default Component;
