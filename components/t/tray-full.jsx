import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3342lbzn.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d3342lbzn"/>`,
		"fallback": "f7:tray-full",
	});
}

export default Component;
