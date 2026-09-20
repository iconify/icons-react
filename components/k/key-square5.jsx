import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdt_v0b7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qdt_v0b7h"/>`,
		"fallback": "reicon:key-square5",
	});
}

export default Component;
