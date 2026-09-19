import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewyi6gblb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ewyi6gblb"/>`,
		"fallback": "iconoir:snapchat-solid",
	});
}

export default Component;
