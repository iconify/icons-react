import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gaw_zbcjh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gaw_zbcjh"/>`,
		"fallback": "streamline-flex:text-style-remix",
	});
}

export default Component;
