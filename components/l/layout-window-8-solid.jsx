import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y02z66pwg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y02z66pwg"/>`,
		"fallback": "streamline:layout-window-8-solid",
	});
}

export default Component;
