import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybqkib0xe.css';
import '../../css/t/t9chy47bb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybqkib0xe"/><path class="t9chy47bb"/>`,
		"fallback": "uim:upload-alt",
	});
}

export default Component;
