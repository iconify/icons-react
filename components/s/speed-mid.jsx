import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3p2f3b8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c3p2f3b8t"/>`,
		"fallback": "reicon:speed-mid",
	});
}

export default Component;
