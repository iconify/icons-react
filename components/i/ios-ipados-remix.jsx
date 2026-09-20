import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjlo6dbxc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hjlo6dbxc"/>`,
		"fallback": "streamline-flex:ios-ipados-remix",
	});
}

export default Component;
