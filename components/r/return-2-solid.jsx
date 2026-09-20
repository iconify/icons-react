import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvi70vyqy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xvi70vyqy"/>`,
		"fallback": "streamline:return-2-solid",
	});
}

export default Component;
