import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eh9o9hbqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eh9o9hbqg"/>`,
		"fallback": "eva:rewind-left-outline",
	});
}

export default Component;
