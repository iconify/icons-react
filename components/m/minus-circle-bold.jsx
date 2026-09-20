import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5qw40bby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r5qw40bby"/>`,
		"fallback": "solar:minus-circle-bold",
	});
}

export default Component;
