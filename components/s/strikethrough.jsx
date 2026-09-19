import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ao2iohlly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ao2iohlly"/>`,
		"fallback": "ci:strikethrough",
	});
}

export default Component;
