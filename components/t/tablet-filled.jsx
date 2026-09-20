import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zl6wsu4jo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zl6wsu4jo"/>`,
		"fallback": "reicon:tablet-filled",
	});
}

export default Component;
