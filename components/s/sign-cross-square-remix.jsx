import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxq03j9uz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wxq03j9uz"/>`,
		"fallback": "streamline:sign-cross-square-remix",
	});
}

export default Component;
