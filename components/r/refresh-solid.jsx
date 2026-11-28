import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kt2wc0bfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kt2wc0bfd"/>`,
		"fallback": "iconaut:refresh-solid",
	});
}

export default Component;
