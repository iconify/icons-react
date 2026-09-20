import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvx0fob8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvx0fob8s"/>`,
		"fallback": "token:lycan",
	});
}

export default Component;
