import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsmm88mdr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsmm88mdr"/>`,
		"fallback": "catppuccin:java-enum",
	});
}

export default Component;
