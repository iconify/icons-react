import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czn1kee8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czn1kee8p"/>`,
		"fallback": "heroicons:pause",
	});
}

export default Component;
