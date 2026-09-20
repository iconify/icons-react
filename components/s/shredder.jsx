import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ez72gdcxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ez72gdcxz"/>`,
		"fallback": "mdi:shredder",
	});
}

export default Component;
