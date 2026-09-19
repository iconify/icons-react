import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbgm7hbjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbgm7hbjx"/>`,
		"fallback": "bx:list-ol",
	});
}

export default Component;
