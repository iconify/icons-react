import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uystlt1uo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uystlt1uo"/>`,
		"fallback": "streamline:screen-curve-remix",
	});
}

export default Component;
