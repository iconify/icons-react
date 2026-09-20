import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ico9cn5px.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ico9cn5px"/>`,
		"fallback": "streamline:subtract-square-solid",
	});
}

export default Component;
