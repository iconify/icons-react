import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cec67vb1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cec67vb1s"/>`,
		"fallback": "mdi:sort-alphabetical-ascending-variant",
	});
}

export default Component;
