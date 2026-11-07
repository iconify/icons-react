import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gu9c0-57j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gu9c0-57j"/>`,
		"fallback": "solar:rewind-15-seconds-back-outline",
	});
}

export default Component;
