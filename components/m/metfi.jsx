import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpg0t8u7t.css';
import '../../css/c/ccmwlvz2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpg0t8u7t"/><path class="ccmwlvz2m"/>`,
		"fallback": "token:metfi",
	});
}

export default Component;
