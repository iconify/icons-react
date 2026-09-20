import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_-c2-bmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y_-c2-bmt"/>`,
		"fallback": "reicon:italic-circle-filled",
	});
}

export default Component;
