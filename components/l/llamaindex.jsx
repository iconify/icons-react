import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtp1szbea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtp1szbea"/>`,
		"fallback": "thesvg-color:llamaindex",
	});
}

export default Component;
